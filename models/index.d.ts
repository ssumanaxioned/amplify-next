import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";



type EagerSlides = {
  readonly id?: string | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly src?: string | null;
  readonly ctaText?: string | null;
  readonly ctaUrl?: string | null;
}

type LazySlides = {
  readonly id?: string | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly src?: string | null;
  readonly ctaText?: string | null;
  readonly ctaUrl?: string | null;
}

export declare type Slides = LazyLoading extends LazyLoadingDisabled ? EagerSlides : LazySlides

export declare const Slides: (new (init: ModelInit<Slides>) => Slides)

type EagerSlider = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Slider, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly slide?: (Slides | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySlider = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Slider, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly slide?: (Slides | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Slider = LazyLoading extends LazyLoadingDisabled ? EagerSlider : LazySlider

export declare const Slider: (new (init: ModelInit<Slider>) => Slider) & {
  copyOf(source: Slider, mutator: (draft: MutableModel<Slider>) => MutableModel<Slider> | void): Slider;
}

type EagerPostDetail = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostDetail, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly subtitle?: string | null;
  readonly description?: string | null;
  readonly images?: (string | null)[] | null;
  readonly slug?: string | null;
  readonly Post?: Post | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postDetailPostId?: string | null;
}

type LazyPostDetail = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostDetail, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly subtitle?: string | null;
  readonly description?: string | null;
  readonly images?: (string | null)[] | null;
  readonly slug?: string | null;
  readonly Post: AsyncItem<Post | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postDetailPostId?: string | null;
}

export declare type PostDetail = LazyLoading extends LazyLoadingDisabled ? EagerPostDetail : LazyPostDetail

export declare const PostDetail: (new (init: ModelInit<PostDetail>) => PostDetail) & {
  copyOf(source: PostDetail, mutator: (draft: MutableModel<PostDetail>) => MutableModel<PostDetail> | void): PostDetail;
}

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly subtitle?: string | null;
  readonly image?: string | null;
  readonly multipleimage?: (string | null)[] | null;
  readonly slug?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly subtitle?: string | null;
  readonly image?: string | null;
  readonly multipleimage?: (string | null)[] | null;
  readonly slug?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerAssests = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Assests, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAssests = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Assests, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Assests = LazyLoading extends LazyLoadingDisabled ? EagerAssests : LazyAssests

export declare const Assests: (new (init: ModelInit<Assests>) => Assests) & {
  copyOf(source: Assests, mutator: (draft: MutableModel<Assests>) => MutableModel<Assests> | void): Assests;
}

type EagerLink = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Link, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Title?: Title | null;
  readonly slug?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly linkTitleId?: string | null;
}

type LazyLink = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Link, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Title: AsyncItem<Title | undefined>;
  readonly slug?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly linkTitleId?: string | null;
}

export declare type Link = LazyLoading extends LazyLoadingDisabled ? EagerLink : LazyLink

export declare const Link: (new (init: ModelInit<Link>) => Link) & {
  copyOf(source: Link, mutator: (draft: MutableModel<Link>) => MutableModel<Link> | void): Link;
}

type EagerTitle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Title, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly en?: string | null;
  readonly es?: string | null;
  readonly fr?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTitle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Title, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly en?: string | null;
  readonly es?: string | null;
  readonly fr?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Title = LazyLoading extends LazyLoadingDisabled ? EagerTitle : LazyTitle

export declare const Title: (new (init: ModelInit<Title>) => Title) & {
  copyOf(source: Title, mutator: (draft: MutableModel<Title>) => MutableModel<Title> | void): Title;
}