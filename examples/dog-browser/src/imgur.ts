import { Display, GObj } from "@gx/core";
import { Gio, GLib, GObject, Soup } from "@gx/gi";

export type Dog = {
    id: string;
    url: string;
    user: User;
    caption: string;
    upvotes: number;
    upvoted: boolean;
    hidden: boolean;
    timestamp: number;
    pics: Pic[];
};

export type User = {
    name: string;
    url: string;
    avatar: string;
};

export type ImageSize = {
    width: number;
    height: number;
};

export type Pic = {
    id: string;
    title: string | null;
    url: string;
    size: ImageSize | null;
    animated: boolean;
};

export const testData: { [key: string]: Dog } = {
    /** Some test data for debugging. */
    testPanko: {
        id: "7TrCOSV",
        url: "https://imgur.com/gallery/7TrCOSV",
        user: {
            name: "PankoBoy",
            url: "https://imgur.com/user/pankoboy",
            avatar: "https://imgur.com/user/pankoboy/avatar",
        },
        caption: "A photo of my dog Panko every day",
        upvotes: 1337,
        upvoted: true,
        hidden: false,
        timestamp: Date.now(),
        pics: [
            {
                id: "Tgf1j4b",
                title: null,
                url: "https://i.imgur.com/Tgf1j4b.jpeg",
                size: { width: 2048, height: 1888 },
                animated: false,
            },
        ],
    },
    testDoublePanko: {
        id: "UxiI7t6",
        url: "https://imgur.com/gallery/UxiI7t6",
        user: {
            name: "PankoBoy",
            url: "https://imgur.com/user/pankoboy",
            avatar: "https://imgur.com/user/pankoboy/avatar",
        },
        caption: "A photo of my dog Panko every day",
        upvotes: 1337,
        upvoted: false,
        hidden: false,
        timestamp: Date.now(),
        pics: [
            {
                id: "R6Yw9m4",
                title: "Sleepy boy while I play games",
                url: "https://i.imgur.com/R6Yw9m4.jpeg",
                size: { width: 1536, height: 2048 },
                animated: false,
            },
            {
                id: "qT9BmkX",
                title: "Bonus",
                url: "https://i.imgur.com/qT9BmkX.jpeg",
                size: { width: 2048, height: 1536 },
                animated: false,
            },
        ],
    },
};

type ImgurPost = {
    id: string;
    title: string;
    description: string | null;
    datetime: number;
    link: string;
    ups: number;
    downs: number;
    points: number;
    score: number;
    is_album: boolean;
    account_url: string;
    account_id: number;
    privacy: string;
    layout: string;
    comment_count: number;
    favority_count: number;
    images_count: number;
    in_gallery: boolean;
    is_ad: boolean;
    tags: ImgurTag[];
    in_most_viral: boolean;
    images: ImgurImage[];
};

type ImgurTag = {
    name: string;
    display_name: string;
    followers: number;
    total_items: number;
    following: boolean;
    is_whitelisted: boolean;
    is_promoted: boolean;
    description: string;
};

type ImgurImage = {
    id: string;
    title: string | null;
    description: string | null;
    datetime: number;
    type: string;
    animated: boolean;
    width: number;
    height: number;
    size: number;
    views: number;
    bandwidth: number;
    has_sound: boolean;
    link: string;
};

const IMGUR_CLIENT_ID = "79e991a86db18d2";

@GObj.Class
export class Imgur extends GObject.Object {
    static dogsSpec = GObject.ParamSpec.jsobject(
        "dogs",
        "dogs",
        "Dogs from imgur",
        GObject.ParamFlags.READABLE
    );

    @GObj.Property(Imgur.dogsSpec)
    get dogs(): Dog[] {
        return this.#dogOrdering;
    }

    #dogPresence: Record<string, boolean> = {};
    #dogOrdering: Dog[] = [];
    #session: Soup.Session = new Soup.Session();

    loadUrl(url: string, cancel?: Gio.Cancellable): Promise<Uint8Array> {
        const msg = Soup.Message.new("GET", url);
        return new Promise((resolve, reject) => {
            this.#session.send_and_read_async(
                msg,
                GLib.PRIORITY_DEFAULT,
                cancel ?? null,
                (session, result) => {
                    try {
                        const data = session.send_and_read_finish(result).get_data();
                        if (data === null) {
                            throw new Error("HTTP request returned null response");
                        }
                        resolve(data);
                    } catch (err) {
                        reject(err);
                    }
                }
            );
        });
    }

    private request<A>(path: string, cancel?: Gio.Cancellable): Promise<A> {
        const msg = Soup.Message.new("GET", `https://api.imgur.com/3/${path}.json`);
        msg.request_headers.append("Authorization", `Client-ID ${IMGUR_CLIENT_ID}`);
        return new Promise((resolve, reject) => {
            this.#session.send_and_read_async(
                msg,
                GLib.PRIORITY_DEFAULT,
                cancel ?? null,
                (session, result) => {
                    try {
                        const data = session.send_and_read_finish(result).get_data();
                        if (data === null) {
                            throw new Error("HTTP request returned null response");
                        }
                        const doc = JSON.parse(new TextDecoder().decode(data));
                        resolve(doc.data);
                    } catch (err) {
                        reject(err);
                    }
                }
            );
        });
    }

    private async fetchGallery(): Promise<ImgurPost[]> {
        const doc = await this.request<Record<string, any>>("gallery/t/dog/time/day/0");
        return doc.items;
    }

    mergeDogs(dogs: Dog[]) {
        for (const dog of dogs) {
            if (!this.#dogPresence[dog.id]) {
                this.#dogOrdering.push(dog);
            }
            this.#dogPresence[dog.id] = true;
        }
        this.#dogOrdering.sort((a, b) => b.timestamp - a.timestamp);
        console.log("Dogs updated:", this.#dogOrdering.length);
        this.notify_by_pspec(Imgur.dogsSpec);
    }

    async update() {
        const posts = await this.fetchGallery();
        const dogs: Dog[] = posts
            .filter((post) => post.images !== undefined)
            .map((post) => ({
                id: post.id,
                url: post.link,
                user: {
                    name: post.account_url,
                    url: `https://imgur.com/user/${post.account_url}`,
                    avatar: `https://imgur.com/user/${post.account_url}/avatar`,
                },
                caption: post.title,
                upvotes: post.ups,
                upvoted: false,
                hidden: false,
                timestamp: post.datetime * 1000,
                pics: post.images.map((image) => ({
                    id: image.id,
                    title: image.title,
                    url: image.link,
                    size: {
                        width: image.width,
                        height: image.height,
                    },
                    animated: image.animated,
                })),
            }));
        this.mergeDogs(dogs);
    }
}
