import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  I18NLocaleCode: { input: any; output: any; }
  JSON: { input: any; output: any; }
  PageSectionsDynamicZoneInput: { input: any; output: any; }
};

export type IGenAnnouncementBar = {
  __typename?: 'AnnouncementBar';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<IGenAnnouncementBar>>;
  localizations_connection: Maybe<IGenAnnouncementBarRelationResponseCollection>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  text: Maybe<Scalars['JSON']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type IGenAnnouncementBarInput = {
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  text: InputMaybe<Scalars['JSON']['input']>;
};

export type IGenAnnouncementBarRelationResponseCollection = {
  __typename?: 'AnnouncementBarRelationResponseCollection';
  nodes: Array<IGenAnnouncementBar>;
};

export type IGenBooleanFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains: InputMaybe<Scalars['Boolean']['input']>;
  containsi: InputMaybe<Scalars['Boolean']['input']>;
  endsWith: InputMaybe<Scalars['Boolean']['input']>;
  eq: InputMaybe<Scalars['Boolean']['input']>;
  eqi: InputMaybe<Scalars['Boolean']['input']>;
  gt: InputMaybe<Scalars['Boolean']['input']>;
  gte: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt: InputMaybe<Scalars['Boolean']['input']>;
  lte: InputMaybe<Scalars['Boolean']['input']>;
  ne: InputMaybe<Scalars['Boolean']['input']>;
  nei: InputMaybe<Scalars['Boolean']['input']>;
  not: InputMaybe<IGenBooleanFilterInput>;
  notContains: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi: InputMaybe<Scalars['Boolean']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith: InputMaybe<Scalars['Boolean']['input']>;
};

export type IGenComponentAtomsButton = {
  __typename?: 'ComponentAtomsButton';
  ariaLabel: Maybe<Scalars['String']['output']>;
  endIcon: Maybe<IGenUploadFile>;
  href: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isNewTab: Maybe<Scalars['Boolean']['output']>;
  label: Scalars['String']['output'];
  startIcon: Maybe<IGenUploadFile>;
};

export type IGenComponentAtomsButtonFiltersInput = {
  and: InputMaybe<Array<InputMaybe<IGenComponentAtomsButtonFiltersInput>>>;
  ariaLabel: InputMaybe<IGenStringFilterInput>;
  href: InputMaybe<IGenStringFilterInput>;
  isNewTab: InputMaybe<IGenBooleanFilterInput>;
  label: InputMaybe<IGenStringFilterInput>;
  not: InputMaybe<IGenComponentAtomsButtonFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenComponentAtomsButtonFiltersInput>>>;
};

export type IGenComponentAtomsButtonInput = {
  ariaLabel: InputMaybe<Scalars['String']['input']>;
  endIcon: InputMaybe<Scalars['ID']['input']>;
  href: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  isNewTab: InputMaybe<Scalars['Boolean']['input']>;
  label: InputMaybe<Scalars['String']['input']>;
  startIcon: InputMaybe<Scalars['ID']['input']>;
};

export type IGenComponentMoleculesCard = {
  __typename?: 'ComponentMoleculesCard';
  button: Maybe<IGenComponentAtomsButton>;
  id: Scalars['ID']['output'];
  media: Maybe<IGenUploadFile>;
  subtitle: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
  variant: Maybe<IGenEnum_Componentmoleculescard_Variant>;
};

export type IGenComponentMoleculesCardFiltersInput = {
  and: InputMaybe<Array<InputMaybe<IGenComponentMoleculesCardFiltersInput>>>;
  button: InputMaybe<IGenComponentAtomsButtonFiltersInput>;
  not: InputMaybe<IGenComponentMoleculesCardFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenComponentMoleculesCardFiltersInput>>>;
  subtitle: InputMaybe<IGenStringFilterInput>;
  title: InputMaybe<IGenStringFilterInput>;
  variant: InputMaybe<IGenStringFilterInput>;
};

export type IGenComponentMoleculesFooterColumn = {
  __typename?: 'ComponentMoleculesFooterColumn';
  id: Scalars['ID']['output'];
  items: Maybe<Array<Maybe<IGenComponentAtomsButton>>>;
  title: Maybe<Scalars['String']['output']>;
};


export type IGenComponentMoleculesFooterColumnItemsArgs = {
  filters: InputMaybe<IGenComponentAtomsButtonFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenComponentMoleculesFooterColumnFiltersInput = {
  and: InputMaybe<Array<InputMaybe<IGenComponentMoleculesFooterColumnFiltersInput>>>;
  items: InputMaybe<IGenComponentAtomsButtonFiltersInput>;
  not: InputMaybe<IGenComponentMoleculesFooterColumnFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenComponentMoleculesFooterColumnFiltersInput>>>;
  title: InputMaybe<IGenStringFilterInput>;
};

export type IGenComponentMoleculesFooterColumnInput = {
  id: InputMaybe<Scalars['ID']['input']>;
  items: InputMaybe<Array<InputMaybe<IGenComponentAtomsButtonInput>>>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type IGenComponentMoleculesHeroSlide = {
  __typename?: 'ComponentMoleculesHeroSlide';
  button: Maybe<IGenComponentAtomsButton>;
  id: Scalars['ID']['output'];
  slideMedia: Maybe<IGenUploadFile>;
  subtitle: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

export type IGenComponentMoleculesHeroSlideFiltersInput = {
  and: InputMaybe<Array<InputMaybe<IGenComponentMoleculesHeroSlideFiltersInput>>>;
  button: InputMaybe<IGenComponentAtomsButtonFiltersInput>;
  not: InputMaybe<IGenComponentMoleculesHeroSlideFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenComponentMoleculesHeroSlideFiltersInput>>>;
  subtitle: InputMaybe<IGenStringFilterInput>;
  title: InputMaybe<IGenStringFilterInput>;
};

export type IGenComponentMoleculesTextMediaSection = {
  __typename?: 'ComponentMoleculesTextMediaSection';
  button: Maybe<IGenComponentAtomsButton>;
  content: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  image: Maybe<IGenUploadFile>;
  subtitle: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

export type IGenComponentOrganismsCardsSwiperSection = {
  __typename?: 'ComponentOrganismsCardsSwiperSection';
  id: Scalars['ID']['output'];
  items: Maybe<Array<Maybe<IGenComponentMoleculesCard>>>;
  maxColumns: Maybe<Scalars['Int']['output']>;
  subtitle: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type IGenComponentOrganismsCardsSwiperSectionItemsArgs = {
  filters: InputMaybe<IGenComponentMoleculesCardFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenComponentOrganismsHeroSection = {
  __typename?: 'ComponentOrganismsHeroSection';
  id: Scalars['ID']['output'];
  slides: Maybe<Array<Maybe<IGenComponentMoleculesHeroSlide>>>;
};


export type IGenComponentOrganismsHeroSectionSlidesArgs = {
  filters: InputMaybe<IGenComponentMoleculesHeroSlideFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenComponentSeoMetaData = {
  __typename?: 'ComponentSeoMetaData';
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  longNavigationName: Maybe<Scalars['String']['output']>;
  ogDescription: Maybe<Scalars['String']['output']>;
  ogImage: Maybe<IGenUploadFile>;
  ogTitle: Maybe<Scalars['String']['output']>;
  shortNavigationName: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};

export type IGenComponentSeoMetaDataFiltersInput = {
  and: InputMaybe<Array<InputMaybe<IGenComponentSeoMetaDataFiltersInput>>>;
  description: InputMaybe<IGenStringFilterInput>;
  longNavigationName: InputMaybe<IGenStringFilterInput>;
  not: InputMaybe<IGenComponentSeoMetaDataFiltersInput>;
  ogDescription: InputMaybe<IGenStringFilterInput>;
  ogTitle: InputMaybe<IGenStringFilterInput>;
  or: InputMaybe<Array<InputMaybe<IGenComponentSeoMetaDataFiltersInput>>>;
  shortNavigationName: InputMaybe<IGenStringFilterInput>;
  title: InputMaybe<IGenStringFilterInput>;
};

export type IGenComponentSeoMetaDataInput = {
  description: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  longNavigationName: InputMaybe<Scalars['String']['input']>;
  ogDescription: InputMaybe<Scalars['String']['input']>;
  ogImage: InputMaybe<Scalars['ID']['input']>;
  ogTitle: InputMaybe<Scalars['String']['input']>;
  shortNavigationName: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type IGenDateTimeFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains: InputMaybe<Scalars['DateTime']['input']>;
  containsi: InputMaybe<Scalars['DateTime']['input']>;
  endsWith: InputMaybe<Scalars['DateTime']['input']>;
  eq: InputMaybe<Scalars['DateTime']['input']>;
  eqi: InputMaybe<Scalars['DateTime']['input']>;
  gt: InputMaybe<Scalars['DateTime']['input']>;
  gte: InputMaybe<Scalars['DateTime']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt: InputMaybe<Scalars['DateTime']['input']>;
  lte: InputMaybe<Scalars['DateTime']['input']>;
  ne: InputMaybe<Scalars['DateTime']['input']>;
  nei: InputMaybe<Scalars['DateTime']['input']>;
  not: InputMaybe<IGenDateTimeFilterInput>;
  notContains: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi: InputMaybe<Scalars['DateTime']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith: InputMaybe<Scalars['DateTime']['input']>;
};

export type IGenDeleteMutationResponse = {
  __typename?: 'DeleteMutationResponse';
  documentId: Scalars['ID']['output'];
};

export enum IGenEnum_Componentmoleculescard_Variant {
  Contained = 'contained',
  Ghost = 'ghost',
  Outlined = 'outlined'
}

export type IGenError = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message: Maybe<Scalars['String']['output']>;
};

export type IGenFileInfoInput = {
  alternativeText: InputMaybe<Scalars['String']['input']>;
  caption: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
};

export type IGenFloatFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains: InputMaybe<Scalars['Float']['input']>;
  containsi: InputMaybe<Scalars['Float']['input']>;
  endsWith: InputMaybe<Scalars['Float']['input']>;
  eq: InputMaybe<Scalars['Float']['input']>;
  eqi: InputMaybe<Scalars['Float']['input']>;
  gt: InputMaybe<Scalars['Float']['input']>;
  gte: InputMaybe<Scalars['Float']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt: InputMaybe<Scalars['Float']['input']>;
  lte: InputMaybe<Scalars['Float']['input']>;
  ne: InputMaybe<Scalars['Float']['input']>;
  nei: InputMaybe<Scalars['Float']['input']>;
  not: InputMaybe<IGenFloatFilterInput>;
  notContains: InputMaybe<Scalars['Float']['input']>;
  notContainsi: InputMaybe<Scalars['Float']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith: InputMaybe<Scalars['Float']['input']>;
};

export type IGenFooter = {
  __typename?: 'Footer';
  content: Maybe<Scalars['JSON']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  linksColumns: Maybe<Array<Maybe<IGenComponentMoleculesFooterColumn>>>;
  locale: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<IGenFooter>>;
  localizations_connection: Maybe<IGenFooterRelationResponseCollection>;
  logo: Maybe<Scalars['String']['output']>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  title: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type IGenFooterLinksColumnsArgs = {
  filters: InputMaybe<IGenComponentMoleculesFooterColumnFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenFooterInput = {
  content: InputMaybe<Scalars['JSON']['input']>;
  linksColumns: InputMaybe<Array<InputMaybe<IGenComponentMoleculesFooterColumnInput>>>;
  logo: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type IGenFooterRelationResponseCollection = {
  __typename?: 'FooterRelationResponseCollection';
  nodes: Array<IGenFooter>;
};

export type IGenGenericMorph = IGenAnnouncementBar | IGenComponentAtomsButton | IGenComponentMoleculesCard | IGenComponentMoleculesFooterColumn | IGenComponentMoleculesHeroSlide | IGenComponentMoleculesTextMediaSection | IGenComponentOrganismsCardsSwiperSection | IGenComponentOrganismsHeroSection | IGenComponentSeoMetaData | IGenFooter | IGenHeader | IGenI18NLocale | IGenPage | IGenReviewWorkflowsWorkflow | IGenReviewWorkflowsWorkflowStage | IGenUploadFile | IGenUsersPermissionsPermission | IGenUsersPermissionsRole | IGenUsersPermissionsUser;

export type IGenHeader = {
  __typename?: 'Header';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  items: Maybe<Array<Maybe<IGenComponentAtomsButton>>>;
  locale: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<IGenHeader>>;
  localizations_connection: Maybe<IGenHeaderRelationResponseCollection>;
  logo: Maybe<Scalars['String']['output']>;
  primaryAction: Maybe<IGenComponentAtomsButton>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type IGenHeaderItemsArgs = {
  filters: InputMaybe<IGenComponentAtomsButtonFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenHeaderInput = {
  items: InputMaybe<Array<InputMaybe<IGenComponentAtomsButtonInput>>>;
  logo: InputMaybe<Scalars['String']['input']>;
  primaryAction: InputMaybe<IGenComponentAtomsButtonInput>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type IGenHeaderRelationResponseCollection = {
  __typename?: 'HeaderRelationResponseCollection';
  nodes: Array<IGenHeader>;
};

export type IGenI18NLocale = {
  __typename?: 'I18NLocale';
  code: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type IGenI18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  nodes: Array<IGenI18NLocale>;
  pageInfo: IGenPagination;
};

export type IGenI18NLocaleFiltersInput = {
  and: InputMaybe<Array<InputMaybe<IGenI18NLocaleFiltersInput>>>;
  code: InputMaybe<IGenStringFilterInput>;
  createdAt: InputMaybe<IGenDateTimeFilterInput>;
  documentId: InputMaybe<IGenIdFilterInput>;
  name: InputMaybe<IGenStringFilterInput>;
  not: InputMaybe<IGenI18NLocaleFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenI18NLocaleFiltersInput>>>;
  publishedAt: InputMaybe<IGenDateTimeFilterInput>;
  updatedAt: InputMaybe<IGenDateTimeFilterInput>;
};

export type IGenIdFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains: InputMaybe<Scalars['ID']['input']>;
  containsi: InputMaybe<Scalars['ID']['input']>;
  endsWith: InputMaybe<Scalars['ID']['input']>;
  eq: InputMaybe<Scalars['ID']['input']>;
  eqi: InputMaybe<Scalars['ID']['input']>;
  gt: InputMaybe<Scalars['ID']['input']>;
  gte: InputMaybe<Scalars['ID']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt: InputMaybe<Scalars['ID']['input']>;
  lte: InputMaybe<Scalars['ID']['input']>;
  ne: InputMaybe<Scalars['ID']['input']>;
  nei: InputMaybe<Scalars['ID']['input']>;
  not: InputMaybe<IGenIdFilterInput>;
  notContains: InputMaybe<Scalars['ID']['input']>;
  notContainsi: InputMaybe<Scalars['ID']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith: InputMaybe<Scalars['ID']['input']>;
};

export type IGenIntFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains: InputMaybe<Scalars['Int']['input']>;
  containsi: InputMaybe<Scalars['Int']['input']>;
  endsWith: InputMaybe<Scalars['Int']['input']>;
  eq: InputMaybe<Scalars['Int']['input']>;
  eqi: InputMaybe<Scalars['Int']['input']>;
  gt: InputMaybe<Scalars['Int']['input']>;
  gte: InputMaybe<Scalars['Int']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt: InputMaybe<Scalars['Int']['input']>;
  lte: InputMaybe<Scalars['Int']['input']>;
  ne: InputMaybe<Scalars['Int']['input']>;
  nei: InputMaybe<Scalars['Int']['input']>;
  not: InputMaybe<IGenIntFilterInput>;
  notContains: InputMaybe<Scalars['Int']['input']>;
  notContainsi: InputMaybe<Scalars['Int']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith: InputMaybe<Scalars['Int']['input']>;
};

export type IGenJsonFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains: InputMaybe<Scalars['JSON']['input']>;
  containsi: InputMaybe<Scalars['JSON']['input']>;
  endsWith: InputMaybe<Scalars['JSON']['input']>;
  eq: InputMaybe<Scalars['JSON']['input']>;
  eqi: InputMaybe<Scalars['JSON']['input']>;
  gt: InputMaybe<Scalars['JSON']['input']>;
  gte: InputMaybe<Scalars['JSON']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt: InputMaybe<Scalars['JSON']['input']>;
  lte: InputMaybe<Scalars['JSON']['input']>;
  ne: InputMaybe<Scalars['JSON']['input']>;
  nei: InputMaybe<Scalars['JSON']['input']>;
  not: InputMaybe<IGenJsonFilterInput>;
  notContains: InputMaybe<Scalars['JSON']['input']>;
  notContainsi: InputMaybe<Scalars['JSON']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith: InputMaybe<Scalars['JSON']['input']>;
};

export type IGenMutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword: Maybe<IGenUsersPermissionsLoginPayload>;
  createPage: Maybe<IGenPage>;
  createReviewWorkflowsWorkflow: Maybe<IGenReviewWorkflowsWorkflow>;
  createReviewWorkflowsWorkflowStage: Maybe<IGenReviewWorkflowsWorkflowStage>;
  /** Create a new role */
  createUsersPermissionsRole: Maybe<IGenUsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: IGenUsersPermissionsUserEntityResponse;
  deleteAnnouncementBar: Maybe<IGenDeleteMutationResponse>;
  deleteFooter: Maybe<IGenDeleteMutationResponse>;
  deleteHeader: Maybe<IGenDeleteMutationResponse>;
  deletePage: Maybe<IGenDeleteMutationResponse>;
  deleteReviewWorkflowsWorkflow: Maybe<IGenDeleteMutationResponse>;
  deleteReviewWorkflowsWorkflowStage: Maybe<IGenDeleteMutationResponse>;
  deleteUploadFile: Maybe<IGenUploadFile>;
  /** Delete an existing role */
  deleteUsersPermissionsRole: Maybe<IGenUsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: IGenUsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation: Maybe<IGenUsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword: Maybe<IGenUsersPermissionsPasswordPayload>;
  login: IGenUsersPermissionsLoginPayload;
  /** Register a user */
  register: IGenUsersPermissionsLoginPayload;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword: Maybe<IGenUsersPermissionsLoginPayload>;
  updateAnnouncementBar: Maybe<IGenAnnouncementBar>;
  updateFooter: Maybe<IGenFooter>;
  updateHeader: Maybe<IGenHeader>;
  updatePage: Maybe<IGenPage>;
  updateReviewWorkflowsWorkflow: Maybe<IGenReviewWorkflowsWorkflow>;
  updateReviewWorkflowsWorkflowStage: Maybe<IGenReviewWorkflowsWorkflowStage>;
  updateUploadFile: IGenUploadFile;
  /** Update an existing role */
  updateUsersPermissionsRole: Maybe<IGenUsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: IGenUsersPermissionsUserEntityResponse;
};


export type IGenMutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type IGenMutationCreatePageArgs = {
  data: IGenPageInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationCreateReviewWorkflowsWorkflowArgs = {
  data: IGenReviewWorkflowsWorkflowInput;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: IGenReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationCreateUsersPermissionsRoleArgs = {
  data: IGenUsersPermissionsRoleInput;
};


export type IGenMutationCreateUsersPermissionsUserArgs = {
  data: IGenUsersPermissionsUserInput;
};


export type IGenMutationDeleteAnnouncementBarArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type IGenMutationDeleteFooterArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type IGenMutationDeleteHeaderArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type IGenMutationDeletePageArgs = {
  documentId: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type IGenMutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
};


export type IGenMutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
};


export type IGenMutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type IGenMutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type IGenMutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type IGenMutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type IGenMutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type IGenMutationLoginArgs = {
  input: IGenUsersPermissionsLoginInput;
};


export type IGenMutationRegisterArgs = {
  input: IGenUsersPermissionsRegisterInput;
};


export type IGenMutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type IGenMutationUpdateAnnouncementBarArgs = {
  data: IGenAnnouncementBarInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationUpdateFooterArgs = {
  data: IGenFooterInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationUpdateHeaderArgs = {
  data: IGenHeaderInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationUpdatePageArgs = {
  data: IGenPageInput;
  documentId: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationUpdateReviewWorkflowsWorkflowArgs = {
  data: IGenReviewWorkflowsWorkflowInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: IGenReviewWorkflowsWorkflowStageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationUpdateUploadFileArgs = {
  id: Scalars['ID']['input'];
  info: InputMaybe<IGenFileInfoInput>;
};


export type IGenMutationUpdateUsersPermissionsRoleArgs = {
  data: IGenUsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type IGenMutationUpdateUsersPermissionsUserArgs = {
  data: IGenUsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};

export type IGenPage = {
  __typename?: 'Page';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<IGenPage>>;
  localizations_connection: Maybe<IGenPageRelationResponseCollection>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  sections: Maybe<Array<Maybe<IGenPageSectionsDynamicZone>>>;
  seo: Maybe<IGenComponentSeoMetaData>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type IGenPageLocalizationsArgs = {
  filters: InputMaybe<IGenPageFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IGenPageLocalizations_ConnectionArgs = {
  filters: InputMaybe<IGenPageFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenPageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection';
  nodes: Array<IGenPage>;
  pageInfo: IGenPagination;
};

export type IGenPageFiltersInput = {
  and: InputMaybe<Array<InputMaybe<IGenPageFiltersInput>>>;
  createdAt: InputMaybe<IGenDateTimeFilterInput>;
  documentId: InputMaybe<IGenIdFilterInput>;
  locale: InputMaybe<IGenStringFilterInput>;
  localizations: InputMaybe<IGenPageFiltersInput>;
  not: InputMaybe<IGenPageFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenPageFiltersInput>>>;
  publishedAt: InputMaybe<IGenDateTimeFilterInput>;
  seo: InputMaybe<IGenComponentSeoMetaDataFiltersInput>;
  slug: InputMaybe<IGenStringFilterInput>;
  title: InputMaybe<IGenStringFilterInput>;
  updatedAt: InputMaybe<IGenDateTimeFilterInput>;
};

export type IGenPageInput = {
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  sections: InputMaybe<Array<Scalars['PageSectionsDynamicZoneInput']['input']>>;
  seo: InputMaybe<IGenComponentSeoMetaDataInput>;
  slug: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type IGenPageRelationResponseCollection = {
  __typename?: 'PageRelationResponseCollection';
  nodes: Array<IGenPage>;
};

export type IGenPageSectionsDynamicZone = IGenComponentMoleculesTextMediaSection | IGenComponentOrganismsCardsSwiperSection | IGenComponentOrganismsHeroSection | IGenError;

export type IGenPagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type IGenPaginationArg = {
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  pageSize: InputMaybe<Scalars['Int']['input']>;
  start: InputMaybe<Scalars['Int']['input']>;
};

export enum IGenPublicationStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type IGenQuery = {
  __typename?: 'Query';
  announcementBar: Maybe<IGenAnnouncementBar>;
  footer: Maybe<IGenFooter>;
  header: Maybe<IGenHeader>;
  i18NLocale: Maybe<IGenI18NLocale>;
  i18NLocales: Array<Maybe<IGenI18NLocale>>;
  i18NLocales_connection: Maybe<IGenI18NLocaleEntityResponseCollection>;
  me: Maybe<IGenUsersPermissionsMe>;
  page: Maybe<IGenPage>;
  pages: Array<Maybe<IGenPage>>;
  pages_connection: Maybe<IGenPageEntityResponseCollection>;
  reviewWorkflowsWorkflow: Maybe<IGenReviewWorkflowsWorkflow>;
  reviewWorkflowsWorkflowStage: Maybe<IGenReviewWorkflowsWorkflowStage>;
  reviewWorkflowsWorkflowStages: Array<Maybe<IGenReviewWorkflowsWorkflowStage>>;
  reviewWorkflowsWorkflowStages_connection: Maybe<IGenReviewWorkflowsWorkflowStageEntityResponseCollection>;
  reviewWorkflowsWorkflows: Array<Maybe<IGenReviewWorkflowsWorkflow>>;
  reviewWorkflowsWorkflows_connection: Maybe<IGenReviewWorkflowsWorkflowEntityResponseCollection>;
  uploadFile: Maybe<IGenUploadFile>;
  uploadFiles: Array<Maybe<IGenUploadFile>>;
  uploadFiles_connection: Maybe<IGenUploadFileEntityResponseCollection>;
  usersPermissionsRole: Maybe<IGenUsersPermissionsRole>;
  usersPermissionsRoles: Array<Maybe<IGenUsersPermissionsRole>>;
  usersPermissionsRoles_connection: Maybe<IGenUsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser: Maybe<IGenUsersPermissionsUser>;
  usersPermissionsUsers: Array<Maybe<IGenUsersPermissionsUser>>;
  usersPermissionsUsers_connection: Maybe<IGenUsersPermissionsUserEntityResponseCollection>;
};


export type IGenQueryAnnouncementBarArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryFooterArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryHeaderArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryI18NLocaleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryI18NLocalesArgs = {
  filters: InputMaybe<IGenI18NLocaleFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryI18NLocales_ConnectionArgs = {
  filters: InputMaybe<IGenI18NLocaleFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryPageArgs = {
  documentId: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryPagesArgs = {
  filters: InputMaybe<IGenPageFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryPages_ConnectionArgs = {
  filters: InputMaybe<IGenPageFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryReviewWorkflowsWorkflowStagesArgs = {
  filters: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryReviewWorkflowsWorkflowsArgs = {
  filters: InputMaybe<IGenReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters: InputMaybe<IGenReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUploadFileArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUploadFilesArgs = {
  filters: InputMaybe<IGenUploadFileFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUploadFiles_ConnectionArgs = {
  filters: InputMaybe<IGenUploadFileFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUsersPermissionsRoleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUsersPermissionsRolesArgs = {
  filters: InputMaybe<IGenUsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUsersPermissionsRoles_ConnectionArgs = {
  filters: InputMaybe<IGenUsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUsersPermissionsUserArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUsersPermissionsUsersArgs = {
  filters: InputMaybe<IGenUsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUsersPermissionsUsers_ConnectionArgs = {
  filters: InputMaybe<IGenUsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};

export type IGenReviewWorkflowsWorkflow = {
  __typename?: 'ReviewWorkflowsWorkflow';
  contentTypes: Scalars['JSON']['output'];
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  stageRequiredToPublish: Maybe<IGenReviewWorkflowsWorkflowStage>;
  stages: Array<Maybe<IGenReviewWorkflowsWorkflowStage>>;
  stages_connection: Maybe<IGenReviewWorkflowsWorkflowStageRelationResponseCollection>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type IGenReviewWorkflowsWorkflowStagesArgs = {
  filters: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IGenReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenReviewWorkflowsWorkflowEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowEntityResponseCollection';
  nodes: Array<IGenReviewWorkflowsWorkflow>;
  pageInfo: IGenPagination;
};

export type IGenReviewWorkflowsWorkflowFiltersInput = {
  and: InputMaybe<Array<InputMaybe<IGenReviewWorkflowsWorkflowFiltersInput>>>;
  contentTypes: InputMaybe<IGenJsonFilterInput>;
  createdAt: InputMaybe<IGenDateTimeFilterInput>;
  documentId: InputMaybe<IGenIdFilterInput>;
  name: InputMaybe<IGenStringFilterInput>;
  not: InputMaybe<IGenReviewWorkflowsWorkflowFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenReviewWorkflowsWorkflowFiltersInput>>>;
  publishedAt: InputMaybe<IGenDateTimeFilterInput>;
  stageRequiredToPublish: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  stages: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  updatedAt: InputMaybe<IGenDateTimeFilterInput>;
};

export type IGenReviewWorkflowsWorkflowInput = {
  contentTypes: InputMaybe<Scalars['JSON']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  stageRequiredToPublish: InputMaybe<Scalars['ID']['input']>;
  stages: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type IGenReviewWorkflowsWorkflowStage = {
  __typename?: 'ReviewWorkflowsWorkflowStage';
  color: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  workflow: Maybe<IGenReviewWorkflowsWorkflow>;
};

export type IGenReviewWorkflowsWorkflowStageEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageEntityResponseCollection';
  nodes: Array<IGenReviewWorkflowsWorkflowStage>;
  pageInfo: IGenPagination;
};

export type IGenReviewWorkflowsWorkflowStageFiltersInput = {
  and: InputMaybe<Array<InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>>>;
  color: InputMaybe<IGenStringFilterInput>;
  createdAt: InputMaybe<IGenDateTimeFilterInput>;
  documentId: InputMaybe<IGenIdFilterInput>;
  name: InputMaybe<IGenStringFilterInput>;
  not: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>>>;
  publishedAt: InputMaybe<IGenDateTimeFilterInput>;
  updatedAt: InputMaybe<IGenDateTimeFilterInput>;
  workflow: InputMaybe<IGenReviewWorkflowsWorkflowFiltersInput>;
};

export type IGenReviewWorkflowsWorkflowStageInput = {
  color: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  workflow: InputMaybe<Scalars['ID']['input']>;
};

export type IGenReviewWorkflowsWorkflowStageRelationResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageRelationResponseCollection';
  nodes: Array<IGenReviewWorkflowsWorkflowStage>;
};

export type IGenStringFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  containsi: InputMaybe<Scalars['String']['input']>;
  endsWith: InputMaybe<Scalars['String']['input']>;
  eq: InputMaybe<Scalars['String']['input']>;
  eqi: InputMaybe<Scalars['String']['input']>;
  gt: InputMaybe<Scalars['String']['input']>;
  gte: InputMaybe<Scalars['String']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt: InputMaybe<Scalars['String']['input']>;
  lte: InputMaybe<Scalars['String']['input']>;
  ne: InputMaybe<Scalars['String']['input']>;
  nei: InputMaybe<Scalars['String']['input']>;
  not: InputMaybe<IGenStringFilterInput>;
  notContains: InputMaybe<Scalars['String']['input']>;
  notContainsi: InputMaybe<Scalars['String']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith: InputMaybe<Scalars['String']['input']>;
};

export type IGenUploadFile = {
  __typename?: 'UploadFile';
  alternativeText: Maybe<Scalars['String']['output']>;
  caption: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  ext: Maybe<Scalars['String']['output']>;
  focalPoint: Maybe<Scalars['JSON']['output']>;
  formats: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata: Maybe<Scalars['JSON']['output']>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  related: Maybe<Array<Maybe<IGenGenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width: Maybe<Scalars['Int']['output']>;
};

export type IGenUploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  nodes: Array<IGenUploadFile>;
  pageInfo: IGenPagination;
};

export type IGenUploadFileFiltersInput = {
  alternativeText: InputMaybe<IGenStringFilterInput>;
  and: InputMaybe<Array<InputMaybe<IGenUploadFileFiltersInput>>>;
  caption: InputMaybe<IGenStringFilterInput>;
  createdAt: InputMaybe<IGenDateTimeFilterInput>;
  documentId: InputMaybe<IGenIdFilterInput>;
  ext: InputMaybe<IGenStringFilterInput>;
  focalPoint: InputMaybe<IGenJsonFilterInput>;
  formats: InputMaybe<IGenJsonFilterInput>;
  hash: InputMaybe<IGenStringFilterInput>;
  height: InputMaybe<IGenIntFilterInput>;
  mime: InputMaybe<IGenStringFilterInput>;
  name: InputMaybe<IGenStringFilterInput>;
  not: InputMaybe<IGenUploadFileFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenUploadFileFiltersInput>>>;
  previewUrl: InputMaybe<IGenStringFilterInput>;
  provider: InputMaybe<IGenStringFilterInput>;
  provider_metadata: InputMaybe<IGenJsonFilterInput>;
  publishedAt: InputMaybe<IGenDateTimeFilterInput>;
  size: InputMaybe<IGenFloatFilterInput>;
  updatedAt: InputMaybe<IGenDateTimeFilterInput>;
  url: InputMaybe<IGenStringFilterInput>;
  width: InputMaybe<IGenIntFilterInput>;
};

export type IGenUsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type IGenUsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type IGenUsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider: Scalars['String']['input'];
};

export type IGenUsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt: Maybe<Scalars['String']['output']>;
  user: IGenUsersPermissionsMe;
};

export type IGenUsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked: Maybe<Scalars['Boolean']['output']>;
  confirmed: Maybe<Scalars['Boolean']['output']>;
  documentId: Scalars['ID']['output'];
  email: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role: Maybe<IGenUsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type IGenUsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: Maybe<Scalars['String']['output']>;
};

export type IGenUsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type IGenUsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  role: Maybe<IGenUsersPermissionsRole>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type IGenUsersPermissionsPermissionFiltersInput = {
  action: InputMaybe<IGenStringFilterInput>;
  and: InputMaybe<Array<InputMaybe<IGenUsersPermissionsPermissionFiltersInput>>>;
  createdAt: InputMaybe<IGenDateTimeFilterInput>;
  documentId: InputMaybe<IGenIdFilterInput>;
  not: InputMaybe<IGenUsersPermissionsPermissionFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenUsersPermissionsPermissionFiltersInput>>>;
  publishedAt: InputMaybe<IGenDateTimeFilterInput>;
  role: InputMaybe<IGenUsersPermissionsRoleFiltersInput>;
  updatedAt: InputMaybe<IGenDateTimeFilterInput>;
};

export type IGenUsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  nodes: Array<IGenUsersPermissionsPermission>;
};

export type IGenUsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type IGenUsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  description: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Maybe<IGenUsersPermissionsPermission>>;
  permissions_connection: Maybe<IGenUsersPermissionsPermissionRelationResponseCollection>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  type: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  users: Array<Maybe<IGenUsersPermissionsUser>>;
  users_connection: Maybe<IGenUsersPermissionsUserRelationResponseCollection>;
};


export type IGenUsersPermissionsRolePermissionsArgs = {
  filters: InputMaybe<IGenUsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IGenUsersPermissionsRolePermissions_ConnectionArgs = {
  filters: InputMaybe<IGenUsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IGenUsersPermissionsRoleUsersArgs = {
  filters: InputMaybe<IGenUsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IGenUsersPermissionsRoleUsers_ConnectionArgs = {
  filters: InputMaybe<IGenUsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenUsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  nodes: Array<IGenUsersPermissionsRole>;
  pageInfo: IGenPagination;
};

export type IGenUsersPermissionsRoleFiltersInput = {
  and: InputMaybe<Array<InputMaybe<IGenUsersPermissionsRoleFiltersInput>>>;
  createdAt: InputMaybe<IGenDateTimeFilterInput>;
  description: InputMaybe<IGenStringFilterInput>;
  documentId: InputMaybe<IGenIdFilterInput>;
  name: InputMaybe<IGenStringFilterInput>;
  not: InputMaybe<IGenUsersPermissionsRoleFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenUsersPermissionsRoleFiltersInput>>>;
  permissions: InputMaybe<IGenUsersPermissionsPermissionFiltersInput>;
  publishedAt: InputMaybe<IGenDateTimeFilterInput>;
  type: InputMaybe<IGenStringFilterInput>;
  updatedAt: InputMaybe<IGenDateTimeFilterInput>;
  users: InputMaybe<IGenUsersPermissionsUserFiltersInput>;
};

export type IGenUsersPermissionsRoleInput = {
  description: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  permissions: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  type: InputMaybe<Scalars['String']['input']>;
  users: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type IGenUsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type IGenUsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked: Maybe<Scalars['Boolean']['output']>;
  confirmed: Maybe<Scalars['Boolean']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  provider: Maybe<Scalars['String']['output']>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  role: Maybe<IGenUsersPermissionsRole>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type IGenUsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data: Maybe<IGenUsersPermissionsUser>;
};

export type IGenUsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  nodes: Array<IGenUsersPermissionsUser>;
  pageInfo: IGenPagination;
};

export type IGenUsersPermissionsUserFiltersInput = {
  and: InputMaybe<Array<InputMaybe<IGenUsersPermissionsUserFiltersInput>>>;
  blocked: InputMaybe<IGenBooleanFilterInput>;
  confirmed: InputMaybe<IGenBooleanFilterInput>;
  createdAt: InputMaybe<IGenDateTimeFilterInput>;
  documentId: InputMaybe<IGenIdFilterInput>;
  email: InputMaybe<IGenStringFilterInput>;
  not: InputMaybe<IGenUsersPermissionsUserFiltersInput>;
  or: InputMaybe<Array<InputMaybe<IGenUsersPermissionsUserFiltersInput>>>;
  provider: InputMaybe<IGenStringFilterInput>;
  publishedAt: InputMaybe<IGenDateTimeFilterInput>;
  role: InputMaybe<IGenUsersPermissionsRoleFiltersInput>;
  updatedAt: InputMaybe<IGenDateTimeFilterInput>;
  username: InputMaybe<IGenStringFilterInput>;
};

export type IGenUsersPermissionsUserInput = {
  blocked: InputMaybe<Scalars['Boolean']['input']>;
  confirmed: InputMaybe<Scalars['Boolean']['input']>;
  email: InputMaybe<Scalars['String']['input']>;
  password: InputMaybe<Scalars['String']['input']>;
  provider: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  role: InputMaybe<Scalars['ID']['input']>;
  username: InputMaybe<Scalars['String']['input']>;
};

export type IGenUsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  nodes: Array<IGenUsersPermissionsUser>;
};

export type IGenF_CardFragment = { __typename?: 'ComponentMoleculesCard', id: string, title: string | null, subtitle: string | null, variant: IGenEnum_Componentmoleculescard_Variant | null, media: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, button: { __typename?: 'ComponentAtomsButton', href: string | null, id: string, isNewTab: boolean | null, label: string, ariaLabel: string | null, startIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, endIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null };

export type IGenF_Cards_SwiperFragment = { __typename?: 'ComponentOrganismsCardsSwiperSection', id: string, title: string | null, subtitle: string | null, maxColumns: number | null, items: Array<{ __typename?: 'ComponentMoleculesCard', id: string, title: string | null, subtitle: string | null, variant: IGenEnum_Componentmoleculescard_Variant | null, media: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, button: { __typename?: 'ComponentAtomsButton', href: string | null, id: string, isNewTab: boolean | null, label: string, ariaLabel: string | null, startIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, endIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null } | null> | null };

export type IGenF_Hero_SectionFragment = { __typename?: 'ComponentOrganismsHeroSection', id: string, slides: Array<{ __typename?: 'ComponentMoleculesHeroSlide', id: string, title: string | null, subtitle: string | null, button: { __typename?: 'ComponentAtomsButton', href: string | null, id: string, isNewTab: boolean | null, label: string, ariaLabel: string | null, startIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, endIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null, slideMedia: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null> | null };

export type IGenF_Hero_SlideFragment = { __typename?: 'ComponentMoleculesHeroSlide', id: string, title: string | null, subtitle: string | null, button: { __typename?: 'ComponentAtomsButton', href: string | null, id: string, isNewTab: boolean | null, label: string, ariaLabel: string | null, startIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, endIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null, slideMedia: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null };

export type IGenF_Text_MediaFragment = { __typename?: 'ComponentMoleculesTextMediaSection', id: string, title: string | null, subtitle: string | null, content: any | null, image: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, button: { __typename?: 'ComponentAtomsButton', href: string | null, id: string, isNewTab: boolean | null, label: string, ariaLabel: string | null, startIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, endIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null };

export type IGenF_Announcement_BarFragment = { __typename?: 'AnnouncementBar', text: any | null };

export type IGenF_ButtonFragment = { __typename?: 'ComponentAtomsButton', href: string | null, id: string, isNewTab: boolean | null, label: string, ariaLabel: string | null, startIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, endIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null };

export type IGenF_MediaFragment = { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null };

export type IGenF_PageFragment = { __typename?: 'Page', title: string, slug: string };

export type IGenF_SeoFragment = { __typename?: 'ComponentSeoMetaData', description: string | null, id: string, longNavigationName: string | null, ogDescription: string | null, ogTitle: string | null, shortNavigationName: string | null, title: string | null, ogImage: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null };

export type IGenAnnouncementBarQueryVariables = Exact<{
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type IGenAnnouncementBarQuery = { __typename?: 'Query', announcementBar: { __typename?: 'AnnouncementBar', text: any | null } | null };

export type IGenQ_FooterQueryVariables = Exact<{
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type IGenQ_FooterQuery = { __typename?: 'Query', footer: { __typename?: 'Footer', logo: string | null, title: string | null, content: any | null } | null };

export type IGenQ_HeaderQueryVariables = Exact<{
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type IGenQ_HeaderQuery = { __typename?: 'Query', header: { __typename?: 'Header', logo: string | null, items: Array<{ __typename?: 'ComponentAtomsButton', href: string | null, id: string, isNewTab: boolean | null, label: string, ariaLabel: string | null, startIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, endIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null> | null, primaryAction: { __typename?: 'ComponentAtomsButton', href: string | null, id: string, isNewTab: boolean | null, label: string, ariaLabel: string | null, startIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null, endIcon: { __typename?: 'UploadFile', url: string, name: string, mime: string, alternativeText: string | null } | null } | null } | null };

export type IGenQ_LocalesQueryVariables = Exact<{ [key: string]: never; }>;


export type IGenQ_LocalesQuery = { __typename?: 'Query', i18NLocales: Array<{ __typename?: 'I18NLocale', name: string | null, code: string | null } | null> };

export type IGenQ_Page_By_SlugQueryVariables = Exact<{
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  filters: InputMaybe<IGenPageFiltersInput>;
}>;


export type IGenQ_Page_By_SlugQuery = { __typename?: 'Query', pages: Array<{ __typename?: 'Page', title: string, slug: string } | null> };

export const F_MediaFragmentDoc = gql`
    fragment f_media on UploadFile {
  url
  name
  mime
  alternativeText
}
    `;
export const F_ButtonFragmentDoc = gql`
    fragment f_button on ComponentAtomsButton {
  href
  id
  isNewTab
  label
  ariaLabel
  startIcon {
    ...f_media
  }
  endIcon {
    ...f_media
  }
}
    ${F_MediaFragmentDoc}`;
export const F_CardFragmentDoc = gql`
    fragment f_card on ComponentMoleculesCard {
  id
  media {
    ...f_media
  }
  title
  subtitle
  button {
    ...f_button
  }
  variant
}
    ${F_MediaFragmentDoc}
${F_ButtonFragmentDoc}`;
export const F_Cards_SwiperFragmentDoc = gql`
    fragment f_cards_swiper on ComponentOrganismsCardsSwiperSection {
  id
  items {
    ...f_card
  }
  title
  subtitle
  maxColumns
}
    ${F_CardFragmentDoc}`;
export const F_Hero_SlideFragmentDoc = gql`
    fragment f_hero_slide on ComponentMoleculesHeroSlide {
  id
  title
  subtitle
  button {
    ...f_button
  }
  slideMedia {
    ...f_media
  }
}
    ${F_ButtonFragmentDoc}
${F_MediaFragmentDoc}`;
export const F_Hero_SectionFragmentDoc = gql`
    fragment f_hero_section on ComponentOrganismsHeroSection {
  id
  slides {
    ...f_hero_slide
  }
}
    ${F_Hero_SlideFragmentDoc}`;
export const F_Text_MediaFragmentDoc = gql`
    fragment f_text_media on ComponentMoleculesTextMediaSection {
  id
  title
  subtitle
  content
  image {
    ...f_media
  }
  button {
    ...f_button
  }
}
    ${F_MediaFragmentDoc}
${F_ButtonFragmentDoc}`;
export const F_Announcement_BarFragmentDoc = gql`
    fragment f_announcement_bar on AnnouncementBar {
  text
}
    `;
export const F_PageFragmentDoc = gql`
    fragment f_page on Page {
  title
  slug
}
    `;
export const F_SeoFragmentDoc = gql`
    fragment f_seo on ComponentSeoMetaData {
  description
  id
  longNavigationName
  ogDescription
  ogImage {
    ...f_media
  }
  ogTitle
  shortNavigationName
  title
}
    ${F_MediaFragmentDoc}`;
export const AnnouncementBarDocument = gql`
    query AnnouncementBar($locale: I18NLocaleCode) {
  announcementBar(locale: $locale) {
    text
  }
}
    `;

/**
 * __useAnnouncementBarQuery__
 *
 * To run a query within a React component, call `useAnnouncementBarQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnnouncementBarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnnouncementBarQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useAnnouncementBarQuery(baseOptions?: Apollo.QueryHookOptions<IGenAnnouncementBarQuery, IGenAnnouncementBarQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IGenAnnouncementBarQuery, IGenAnnouncementBarQueryVariables>(AnnouncementBarDocument, options);
      }
export function useAnnouncementBarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IGenAnnouncementBarQuery, IGenAnnouncementBarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IGenAnnouncementBarQuery, IGenAnnouncementBarQueryVariables>(AnnouncementBarDocument, options);
        }
// @ts-ignore
export function useAnnouncementBarSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IGenAnnouncementBarQuery, IGenAnnouncementBarQueryVariables>): Apollo.UseSuspenseQueryResult<IGenAnnouncementBarQuery, IGenAnnouncementBarQueryVariables>;
export function useAnnouncementBarSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<IGenAnnouncementBarQuery, IGenAnnouncementBarQueryVariables>): Apollo.UseSuspenseQueryResult<IGenAnnouncementBarQuery | undefined, IGenAnnouncementBarQueryVariables>;
export function useAnnouncementBarSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<IGenAnnouncementBarQuery, IGenAnnouncementBarQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IGenAnnouncementBarQuery, IGenAnnouncementBarQueryVariables>(AnnouncementBarDocument, options);
        }
export type AnnouncementBarQueryHookResult = ReturnType<typeof useAnnouncementBarQuery>;
export type AnnouncementBarLazyQueryHookResult = ReturnType<typeof useAnnouncementBarLazyQuery>;
export type AnnouncementBarSuspenseQueryHookResult = ReturnType<typeof useAnnouncementBarSuspenseQuery>;
export type AnnouncementBarQueryResult = Apollo.QueryResult<IGenAnnouncementBarQuery, IGenAnnouncementBarQueryVariables>;
export const Q_FooterDocument = gql`
    query q_footer($locale: I18NLocaleCode) {
  footer(locale: $locale) {
    logo
    title
    content
  }
}
    `;

/**
 * __useQ_FooterQuery__
 *
 * To run a query within a React component, call `useQ_FooterQuery` and pass it any options that fit your needs.
 * When your component renders, `useQ_FooterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQ_FooterQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useQ_FooterQuery(baseOptions?: Apollo.QueryHookOptions<IGenQ_FooterQuery, IGenQ_FooterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IGenQ_FooterQuery, IGenQ_FooterQueryVariables>(Q_FooterDocument, options);
      }
export function useQ_FooterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IGenQ_FooterQuery, IGenQ_FooterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IGenQ_FooterQuery, IGenQ_FooterQueryVariables>(Q_FooterDocument, options);
        }
// @ts-ignore
export function useQ_FooterSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IGenQ_FooterQuery, IGenQ_FooterQueryVariables>): Apollo.UseSuspenseQueryResult<IGenQ_FooterQuery, IGenQ_FooterQueryVariables>;
export function useQ_FooterSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<IGenQ_FooterQuery, IGenQ_FooterQueryVariables>): Apollo.UseSuspenseQueryResult<IGenQ_FooterQuery | undefined, IGenQ_FooterQueryVariables>;
export function useQ_FooterSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<IGenQ_FooterQuery, IGenQ_FooterQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IGenQ_FooterQuery, IGenQ_FooterQueryVariables>(Q_FooterDocument, options);
        }
export type Q_FooterQueryHookResult = ReturnType<typeof useQ_FooterQuery>;
export type Q_FooterLazyQueryHookResult = ReturnType<typeof useQ_FooterLazyQuery>;
export type Q_FooterSuspenseQueryHookResult = ReturnType<typeof useQ_FooterSuspenseQuery>;
export type Q_FooterQueryResult = Apollo.QueryResult<IGenQ_FooterQuery, IGenQ_FooterQueryVariables>;
export const Q_HeaderDocument = gql`
    query q_header($locale: I18NLocaleCode) {
  header(locale: $locale) {
    logo
    items {
      ...f_button
    }
    primaryAction {
      ...f_button
    }
  }
}
    ${F_ButtonFragmentDoc}`;

/**
 * __useQ_HeaderQuery__
 *
 * To run a query within a React component, call `useQ_HeaderQuery` and pass it any options that fit your needs.
 * When your component renders, `useQ_HeaderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQ_HeaderQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useQ_HeaderQuery(baseOptions?: Apollo.QueryHookOptions<IGenQ_HeaderQuery, IGenQ_HeaderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IGenQ_HeaderQuery, IGenQ_HeaderQueryVariables>(Q_HeaderDocument, options);
      }
export function useQ_HeaderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IGenQ_HeaderQuery, IGenQ_HeaderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IGenQ_HeaderQuery, IGenQ_HeaderQueryVariables>(Q_HeaderDocument, options);
        }
// @ts-ignore
export function useQ_HeaderSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IGenQ_HeaderQuery, IGenQ_HeaderQueryVariables>): Apollo.UseSuspenseQueryResult<IGenQ_HeaderQuery, IGenQ_HeaderQueryVariables>;
export function useQ_HeaderSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<IGenQ_HeaderQuery, IGenQ_HeaderQueryVariables>): Apollo.UseSuspenseQueryResult<IGenQ_HeaderQuery | undefined, IGenQ_HeaderQueryVariables>;
export function useQ_HeaderSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<IGenQ_HeaderQuery, IGenQ_HeaderQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IGenQ_HeaderQuery, IGenQ_HeaderQueryVariables>(Q_HeaderDocument, options);
        }
export type Q_HeaderQueryHookResult = ReturnType<typeof useQ_HeaderQuery>;
export type Q_HeaderLazyQueryHookResult = ReturnType<typeof useQ_HeaderLazyQuery>;
export type Q_HeaderSuspenseQueryHookResult = ReturnType<typeof useQ_HeaderSuspenseQuery>;
export type Q_HeaderQueryResult = Apollo.QueryResult<IGenQ_HeaderQuery, IGenQ_HeaderQueryVariables>;
export const Q_LocalesDocument = gql`
    query q_locales {
  i18NLocales {
    name
    code
  }
}
    `;

/**
 * __useQ_LocalesQuery__
 *
 * To run a query within a React component, call `useQ_LocalesQuery` and pass it any options that fit your needs.
 * When your component renders, `useQ_LocalesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQ_LocalesQuery({
 *   variables: {
 *   },
 * });
 */
export function useQ_LocalesQuery(baseOptions?: Apollo.QueryHookOptions<IGenQ_LocalesQuery, IGenQ_LocalesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IGenQ_LocalesQuery, IGenQ_LocalesQueryVariables>(Q_LocalesDocument, options);
      }
export function useQ_LocalesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IGenQ_LocalesQuery, IGenQ_LocalesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IGenQ_LocalesQuery, IGenQ_LocalesQueryVariables>(Q_LocalesDocument, options);
        }
// @ts-ignore
export function useQ_LocalesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IGenQ_LocalesQuery, IGenQ_LocalesQueryVariables>): Apollo.UseSuspenseQueryResult<IGenQ_LocalesQuery, IGenQ_LocalesQueryVariables>;
export function useQ_LocalesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<IGenQ_LocalesQuery, IGenQ_LocalesQueryVariables>): Apollo.UseSuspenseQueryResult<IGenQ_LocalesQuery | undefined, IGenQ_LocalesQueryVariables>;
export function useQ_LocalesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<IGenQ_LocalesQuery, IGenQ_LocalesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IGenQ_LocalesQuery, IGenQ_LocalesQueryVariables>(Q_LocalesDocument, options);
        }
export type Q_LocalesQueryHookResult = ReturnType<typeof useQ_LocalesQuery>;
export type Q_LocalesLazyQueryHookResult = ReturnType<typeof useQ_LocalesLazyQuery>;
export type Q_LocalesSuspenseQueryHookResult = ReturnType<typeof useQ_LocalesSuspenseQuery>;
export type Q_LocalesQueryResult = Apollo.QueryResult<IGenQ_LocalesQuery, IGenQ_LocalesQueryVariables>;
export const Q_Page_By_SlugDocument = gql`
    query q_page_by_slug($locale: I18NLocaleCode, $filters: PageFiltersInput) {
  pages(locale: $locale, filters: $filters) {
    ...f_page
  }
}
    ${F_PageFragmentDoc}`;

/**
 * __useQ_Page_By_SlugQuery__
 *
 * To run a query within a React component, call `useQ_Page_By_SlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useQ_Page_By_SlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQ_Page_By_SlugQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useQ_Page_By_SlugQuery(baseOptions?: Apollo.QueryHookOptions<IGenQ_Page_By_SlugQuery, IGenQ_Page_By_SlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IGenQ_Page_By_SlugQuery, IGenQ_Page_By_SlugQueryVariables>(Q_Page_By_SlugDocument, options);
      }
export function useQ_Page_By_SlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IGenQ_Page_By_SlugQuery, IGenQ_Page_By_SlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IGenQ_Page_By_SlugQuery, IGenQ_Page_By_SlugQueryVariables>(Q_Page_By_SlugDocument, options);
        }
// @ts-ignore
export function useQ_Page_By_SlugSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IGenQ_Page_By_SlugQuery, IGenQ_Page_By_SlugQueryVariables>): Apollo.UseSuspenseQueryResult<IGenQ_Page_By_SlugQuery, IGenQ_Page_By_SlugQueryVariables>;
export function useQ_Page_By_SlugSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<IGenQ_Page_By_SlugQuery, IGenQ_Page_By_SlugQueryVariables>): Apollo.UseSuspenseQueryResult<IGenQ_Page_By_SlugQuery | undefined, IGenQ_Page_By_SlugQueryVariables>;
export function useQ_Page_By_SlugSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<IGenQ_Page_By_SlugQuery, IGenQ_Page_By_SlugQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IGenQ_Page_By_SlugQuery, IGenQ_Page_By_SlugQueryVariables>(Q_Page_By_SlugDocument, options);
        }
export type Q_Page_By_SlugQueryHookResult = ReturnType<typeof useQ_Page_By_SlugQuery>;
export type Q_Page_By_SlugLazyQueryHookResult = ReturnType<typeof useQ_Page_By_SlugLazyQuery>;
export type Q_Page_By_SlugSuspenseQueryHookResult = ReturnType<typeof useQ_Page_By_SlugSuspenseQuery>;
export type Q_Page_By_SlugQueryResult = Apollo.QueryResult<IGenQ_Page_By_SlugQuery, IGenQ_Page_By_SlugQueryVariables>;