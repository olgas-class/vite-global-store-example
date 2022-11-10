import { reactive } from "vue";

export const store = reactive({
  menu: [
    {
      title: "Home",
      url: "/home",
      active: true,
    },
    {
      title: "Services",
      url: "/services",
      active: false,
    },
    {
      title: "About us",
      url: "/about-us",
      active: false,
    },
    {
      title: "Contacts",
      url: "/contacts",
      active: false,
    },
    {
      title: "Partners",
      url: "/partners",
      active: false,
    },
  ],
  title: "Titolo APP",
  objects: [],
});
