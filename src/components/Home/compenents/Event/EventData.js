// Event Images from Cloudinary CDN
const EventImages = {
  VisionVoyage: "https://res.cloudinary.com/dtoxlqpkf/image/upload/v1766772881/vv_c4mjnz.jpg",
  DilChahtaHai: "https://res.cloudinary.com/dtoxlqpkf/image/upload/v1766772879/Dil_yowtbz.jpg",
  ACD: "https://res.cloudinary.com/dtoxlqpkf/image/upload/v1766772882/ACD_jidv8v.jpg"
};

export const EventData = [
   {
    Name: "VISION VOYAGE 2.0",
    About: "Roadmap for students",
    Date: "3-9-2025",
    Details: "VISION VOYAGE 2.0",
    MInfo: "This event aimed at guiding first-year  ",
    AInfo: "students by creating a comprehensive roadmap for their academic and technical journey",
    Link: "https://docs.google.com/forms/d/e/1FAIpQLSe0sAp8OyQjVopCJ-HqJqMA2Llkh-TIWRBjtFhcuI_exoSMHw/viewform?usp=header",
    Image: EventImages.VisionVoyage,
    isRegistrationClosed: false
  },
  {
    Name: "DIL CHAHTA HAI",
    About: "Donation Drive",
    Date: "19-10-2024",
    Details: "DIL CHAHTA HAI",
    MInfo: "Organized a heartwarming charity  event to make a difference in the lives",
    AInfo: "of those who need it most",
    Link: "/register",
    Image: EventImages.DilChahtaHai,
    isRegistrationClosed: true
  },
 
];
