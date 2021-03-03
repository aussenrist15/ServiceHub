
import Dashboard from "./Dashboard";
//import Profile from "views/examples/Profile.js";
import Balance from "./Balance.js";
//import BillingInfo from "views/examples/BillingInfo.js";
//import Orders from "views/examples/Orders.js";
//import Gigs from "views/examples/Gigs.js";
import Security from "./Security";
//import Chat from "views/examples/Chat"
//import Analytics from "views/examples/Analytics"
//import ReachUs from "views/examples/ReachUs"
//import PostRequest from "views/examples/PostRequest"

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Dashboard,
    layout: "/dashboard",
  },
 /* {
    path: "/analytics",
    name: "Analytics",
    icon: "ni ni-chart-pie-35 text-dark",
    component: Analytics,
    layout: "/dashboard",
  },
  */
  {
    path: "/balance",
    name: "Balance",
    icon: "ni ni-credit-card text-orange",
    component: Balance,
    layout: "/dashboard",
  },
  {
    path: "/security",
    name: "Security",
    icon: "ni ni-key-25 text-info",
    component: Security,
    layout: "/dashboard",
  },
  /*
  {
    path: "/chatmessages",
    name: "Chat",
    icon: "ni ni-chat-round text-green",
    component: Chat,
    layout: "/dashboard",
  },
  {
    path: "/postrequest",
    name: "Post Request",
    icon: "ni ni-cloud-upload-96 text-gray",
    component: PostRequest,
    layout: "/dashboard",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/dashboard",
  },
  {
    path: "/orders",
    name: "Orders",
    icon: "ni ni-bullet-list-67 text-red",
    component: Orders,
    layout: "/dashboard",
  },
  {
    path: "/gigs",
    name: "Gigs",
    icon: "ni ni-spaceship text-default",
    component: Gigs,
    layout: "/dashboard",
  },
  {
    path: "/billinginfo",
    name: "Billing Info",
    icon: "ni ni-money-coins text-purple",
    component: BillingInfo,
    layout: "/dashboard",
  },
  {
    path: "/reachus",
    name: "Reach Us",
    icon: "ni ni-satisfied text-pink",
    component: ReachUs,
    layout: "/dashboard",
  },
  */
];
export default routes;
