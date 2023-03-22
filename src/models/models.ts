export type ICode = string | undefined | null;

export interface IToken {
    access_token: string;
    token_type: string;
    refresh_token: string;
    scope: string;
    created_at: number;
}

export interface Links {
    self: string;
    html: string;
    photos: string;
}

export interface Links2 {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
}

export interface Links3 {
    self: string;
    html: string;
    download: string;
    download_location: string;
}

export interface ProfileImage {
    small: string;
    medium: string;
    large: string;
}

export interface Social {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string;
    paypal_email?: any;
}

export interface Owner {
    id: string;
    updated_at: Date;
    username: string;
    name: string;
    first_name: string;
    last_name?: any;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: string;
    links: Links2;
    profile_image: ProfileImage;
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social;
}

export interface Urls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
}


export interface IStatus {
    status: string;
    approved_on: Date;
}

export interface ArtsCulture {
    status: string;
}

export interface TopicSubmissions {
    wallpapers: IStatus;
    'color-of-water': IStatus;
    travel: IStatus;
    spirituality: IStatus;
    nature: IStatus;
    '3d-renders': IStatus;
    experimental: IStatus;
    'street-photography': IStatus;
    'textures-patterns': IStatus;
    animals: IStatus;
    'arts-culture': ArtsCulture;
    'architecture-interior': IStatus;
    'fashion-beauty': IStatus;
}

export interface Links4 {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
}

export interface ProfileImage2 {
    small: string;
    medium: string;
    large: string;
}

export interface Social2 {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string;
    paypal_email?: any;
}

export interface User {
    id: string;
    updated_at: Date;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: string;
    links: Links4;
    profile_image: ProfileImage2;
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social2;
}

export interface CoverPhoto {
    id: string;
    created_at: Date;
    updated_at: Date;
    promoted_at?: Date;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: string;
    alt_description: string;
    urls: Urls;
    links: Links3;
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any[];
    sponsorship?: any;
    topic_submissions: TopicSubmissions;
    user: User;
}

export interface Urls2 {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
}

export interface PreviewPhoto {
    id: string;
    created_at: Date;
    updated_at: Date;
    blur_hash: string;
    urls: Urls2;
}

export interface ITopics {
    id: string;
    slug: string;
    title: string;
    description: string;
    published_at: Date;
    updated_at: Date;
    starts_at: Date;
    ends_at?: any;
    only_submissions_after?: any;
    visibility: string;
    featured: boolean;
    total_photos: number;
    current_user_contributions: any[];
    total_current_user_submissions: object;
    links: Links3;
    status: string;
    owners: Owner[];
    cover_photo: CoverPhoto;
    preview_photos: PreviewPhoto[];
    urls?: Urls;
    user?: User;
}
