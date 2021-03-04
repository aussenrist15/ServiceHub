import Profile from "./Profile";
import Balance from "./Balance";
import BillingInfo from "./BillingInfo.js";
import Orders from "./Orders";
import Gigs from "./Gigs";
import Security from "./Security";
import Chat from "./Chat"
import Analytics from "./Analytics"
import ReachUs from "./ReachUs"
import PostRequest from "./PostRequest"
import Index from "./Index"

var routes = [
  {
    path: "/Index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/dashboard",
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: "ni ni-chart-pie-35 text-dark",
    component: Analytics,
    layout: "/dashboard",
  },
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
];
export default routes;
