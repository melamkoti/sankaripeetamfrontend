//-------------BASEURL's----------------
const BaseAPIURL = "http://localhost:3000/";
// const BaseAPIURL = "https://api.sankaripeetam.org/";

const UserRegisterAPI = {
  RegisterPost: BaseAPIURL + "user/signup",
  RegisterEmailPost: BaseAPIURL + "user/signupemail",
  SingInPost: BaseAPIURL + "user/login",
  UserDetailsGet: BaseAPIURL + "user/me",
  ForgetPasswordPost: BaseAPIURL + "user/forgot-password",
  ResetPasswordPost: BaseAPIURL + "user/reset-password",
  AllUsersGet: BaseAPIURL + "user",
};
const EventsAPI = {
  AllEventsPost: BaseAPIURL + "api/event",
  UpcomingEventsGet: BaseAPIURL + "api/event/upcoming-events",
  OldEventsGet: BaseAPIURL + "api/event/old-events",
  AllEventsGet: BaseAPIURL + "api/event",
  IndividualEventPut: BaseAPIURL + "api/event",
  IndividualEventDelete: BaseAPIURL + "api/event",
};

const ActivityAPI = {
  AllActivityPost: BaseAPIURL + "api/activities",
  AllActivityGet: BaseAPIURL + "api/activities",
  IndividualActivityPut: BaseAPIURL + "api/activities",
  IndividualActivityDelete: BaseAPIURL + "api/activities",
};
const PostsAPI = {
  AllPostsPost: BaseAPIURL + "api/post/posts",
  AllPostsGet: BaseAPIURL + "api/post",
  IndividualPostPut: BaseAPIURL + "api/post",
  IndividualPostDelete: BaseAPIURL + "api/post",
};
const ContactAPI = {
  AllContactDetailsPost: BaseAPIURL + "contact",
};
const DonationAPI = {
  DonationAmoutPost: BaseAPIURL + "donation/create-order",
  AllDonationGet: BaseAPIURL + "donation",
};
const GalleryAPI = {
  AllGalleryPost: BaseAPIURL + "api/gallery",
  AllGalleryGet: BaseAPIURL + "api/gallery",
};
export const UserModuleAPI = {
  ...UserRegisterAPI,
  ...EventsAPI,
  ...ActivityAPI,
  ...PostsAPI,
  ...ContactAPI,
  ...DonationAPI,
  ...GalleryAPI
};
