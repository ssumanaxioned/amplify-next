import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerImageArray = {
  readonly title?: string | null;
  readonly imageSrc?: (string | null)[] | null;
  readonly videoSrc?: (string | null)[] | null;
}

type LazyImageArray = {
  readonly title?: string | null;
  readonly imageSrc?: (string | null)[] | null;
  readonly videoSrc?: (string | null)[] | null;
}

export declare type ImageArray = LazyLoading extends LazyLoadingDisabled ? EagerImageArray : LazyImageArray

export declare const ImageArray: (new (init: ModelInit<ImageArray>) => ImageArray)

type EagerTitle = {
  readonly en?: string | null;
  readonly es?: string | null;
  readonly fr?: string | null;
}

type LazyTitle = {
  readonly en?: string | null;
  readonly es?: string | null;
  readonly fr?: string | null;
}

export declare type Title = LazyLoading extends LazyLoadingDisabled ? EagerTitle : LazyTitle

export declare const Title: (new (init: ModelInit<Title>) => Title)

type EagerDescription = {
  readonly en?: string | null;
  readonly es?: string | null;
  readonly fr?: string | null;
}

type LazyDescription = {
  readonly en?: string | null;
  readonly es?: string | null;
  readonly fr?: string | null;
}

export declare type Description = LazyLoading extends LazyLoadingDisabled ? EagerDescription : LazyDescription

export declare const Description: (new (init: ModelInit<Description>) => Description)

type EagerCTA = {
  readonly en?: string | null;
  readonly es?: string | null;
  readonly fr?: string | null;
  readonly ctaUrl?: string | null;
}

type LazyCTA = {
  readonly en?: string | null;
  readonly es?: string | null;
  readonly fr?: string | null;
  readonly ctaUrl?: string | null;
}

export declare type CTA = LazyLoading extends LazyLoadingDisabled ? EagerCTA : LazyCTA

export declare const CTA: (new (init: ModelInit<CTA>) => CTA)

type EagerLocale = {
  readonly id?: string | null;
  readonly title?: string | null;
  readonly locale?: string | null;
}

type LazyLocale = {
  readonly id?: string | null;
  readonly title?: string | null;
  readonly locale?: string | null;
}

export declare type Locale = LazyLoading extends LazyLoadingDisabled ? EagerLocale : LazyLocale

export declare const Locale: (new (init: ModelInit<Locale>) => Locale)

type EagerLinks = {
  readonly id?: string | null;
  readonly slug?: string | null;
  readonly url?: string | null;
  readonly en?: string | null;
  readonly es?: string | null;
  readonly fr?: string | null;
}

type LazyLinks = {
  readonly id?: string | null;
  readonly slug?: string | null;
  readonly url?: string | null;
  readonly en?: string | null;
  readonly es?: string | null;
  readonly fr?: string | null;
}

export declare type Links = LazyLoading extends LazyLoadingDisabled ? EagerLinks : LazyLinks

export declare const Links: (new (init: ModelInit<Links>) => Links)

type EagerWork = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Work, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: Title | null;
  readonly description?: Description | null;
  readonly bannerImage?: string | null;
  readonly slug?: string | null;
  readonly seeAll?: CTA | null;
  readonly otherWork?: (string | null)[] | null;
  readonly imageArray?: (ImageArray | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWork = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Work, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: Title | null;
  readonly description?: Description | null;
  readonly bannerImage?: string | null;
  readonly slug?: string | null;
  readonly seeAll?: CTA | null;
  readonly otherWork?: (string | null)[] | null;
  readonly imageArray?: (ImageArray | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Work = LazyLoading extends LazyLoadingDisabled ? EagerWork : LazyWork

export declare const Work: (new (init: ModelInit<Work>) => Work) & {
  copyOf(source: Work, mutator: (draft: MutableModel<Work>) => MutableModel<Work> | void): Work;
}

type EagerSlider = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Slider, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Page?: string | null;
  readonly title?: Title | null;
  readonly description?: Description | null;
  readonly videoSrc?: string | null;
  readonly imageSrc?: string | null;
  readonly cta?: CTA | null;
  readonly workImage?: string | null;
  readonly imageArray?: (ImageArray | null)[] | null;
  readonly slug?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySlider = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Slider, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Page?: string | null;
  readonly title?: Title | null;
  readonly description?: Description | null;
  readonly videoSrc?: string | null;
  readonly imageSrc?: string | null;
  readonly cta?: CTA | null;
  readonly workImage?: string | null;
  readonly imageArray?: (ImageArray | null)[] | null;
  readonly slug?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Slider = LazyLoading extends LazyLoadingDisabled ? EagerSlider : LazySlider

export declare const Slider: (new (init: ModelInit<Slider>) => Slider) & {
  copyOf(source: Slider, mutator: (draft: MutableModel<Slider>) => MutableModel<Slider> | void): Slider;
}

type EagerHeader = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Header, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly links?: (Links | null)[] | null;
  readonly locale?: (Locale | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHeader = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Header, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly links?: (Links | null)[] | null;
  readonly locale?: (Locale | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Header = LazyLoading extends LazyLoadingDisabled ? EagerHeader : LazyHeader

export declare const Header: (new (init: ModelInit<Header>) => Header) & {
  copyOf(source: Header, mutator: (draft: MutableModel<Header>) => MutableModel<Header> | void): Header;
}