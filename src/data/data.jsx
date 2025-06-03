export default function ProjectList() {
  return [
    {
      id: 0,
      orientation: 0,
      projectTitle: "Monument Recognition App",
      projectSmallTitle: "Monument Recognition",
      projectType: "ml",
      projectCategory: ["Machine Learning", "Mobile Application"],
      description: (
        <p>
          The Monument Recognition Application is a mobile app driven by machine
          learning and object detection technology. It enables real-time
          identification of historical monuments using your phone&apos;s camera.
          Additionally, it provides in-depth information about the recognized
          monuments. This app was a collaborative effort, developed as part of a
          group project during the third year of our computer engineering
          program, aiming to fulfill our minor project requirements.
          <br></br>
          <br></br>
          The mobile app employs a MobileNetSSD V2 object detection model, which
          has been trained on a custom dataset, to initially identify monuments
          in the camera feed. Once detected, the app does an API call to the
          server hosted on virtual machine in Microsoft Azure where the
          inferencing model named YOLO V7 is deployed which does the
          identification of the monument. Monument information and location
          coordinates are stored in a PostgreSQL database. An intelligent
          feature validates the monument&apos;s identification by comparing
          real-time device coordinates with monument location coordinates.
          <br></br>
          <br></br>
          Moreover, the app offers recommendations for nearby amenities such as
          hotels and ATMs based on location coordinates. The machine learning
          models were trained using a custom dataset created by our team. For
          further project details, including the proposal and report, please
          visit the project&apos;s GitHub link.
        </p>
      ),
      miniDescription: (
        <p>
          The Monument Recognition App is like a magic camera on your phone. It
          uses machine learning to instantly find and tell you about historical
          landmarks when you point your phone camera at them. It even shows you
          detailed information about these monuments.
        </p>
      ),
      techUsed: [
        {
          title: "Programming Language",
          technologies: [
            {
              title: "Python",
              imgSrc: "python-icon.png",
              imgAlt: "Python Programming Language",
              imgTitle: "Python Programming Language",
            },

            {
              title: "Java",
              imgSrc: "java-icon.png",
              imgAlt: "Java Programming Language",
              imgTitle: "Java Programming Language",
            },
            {
              title: "Kotlin",
              imgSrc: "kotlin-icon.png",
              imgAlt: "Kotlin Programming Language",
              imgTitle: "Kotlin Programming Language",
            },
          ],
        },

        {
          title: "Framework",
          technologies: [
            {
              title: "Tensorflow",
              imgSrc: "tensorflow-icon.png",
              imgAlt: "Tensorflow Framework",
              imgTitle: "Tensorflow Framework",
            },
            {
              title: "Pytorch",
              imgSrc: "pytorch-icon.png",
              imgAlt: "Pytorch Framework",
              imgTitle: "Pytorch Framework",
            },
          ],
        },

        {
          title: "Database",
          technologies: [
            {
              title: "PostgreSQL",
              imgSrc: "postgres-icon.png",
              imgAlt: "PostgreSQL Database",
              imgTitle: "PostgreSQL Database",
            },
          ],
        },
        {
          title: "Cloud Infrastructure",
          technologies: [
            {
              title: "Microsoft Azure",
              imgSrc: "azure-icon.png",
              imgAlt: "Microsoft Azure",
              imgTitle: "Microsoft Azure",
            },
          ],
        },
        {
          title: "IDE Softwares",
          technologies: [
            {
              title: "Visual Studio Code",
              imgSrc: "vscode-icon.png",
              imgAlt: "Visual Studio Code IDE",
              imgTitle: "Visual Studio Code IDE",
            },
            {
              title: "Android Studio",
              imgSrc: "android-studio-icon.png",
              imgAlt: "Android Studio IDE",
              imgTitle: "Android Studio IDE",
            },
          ],
        },
      ],
      targetedPlatform: [
        {
          alt: "Android Platform",
          title: "Android Platform",
          src: "android-icon.png",
        },
      ],

      ghubLink: "https://github.com/samshrita/Monument-Recognition-System",
      carouselImg: {
        web: [],

        phone: [
          {
            imgSrc: "monument-recognition-application-images/phone/1.jpg",
            imgTitle: "Splash Screen",
          },
          {
            imgSrc: "monument-recognition-application-images/phone/2.jpg",
            imgTitle: "Camera Screen",
          },
          {
            imgSrc: "monument-recognition-application-images/phone/3.jpg",
            imgTitle: "Monument Recognition",
          },
          {
            imgSrc: "monument-recognition-application-images/phone/4.jpg",
            imgTitle: "Monument Details",
          },
          {
            imgSrc: "monument-recognition-application-images/phone/5.jpg",
            imgTitle: "App Settings",
          },
          {
            imgSrc: "monument-recognition-application-images/phone/6.jpg",
            imgTitle: "Nearby Services Page",
          },
          {
            imgSrc: "monument-recognition-application-images/phone/7.jpg",
            imgTitle: "Nearby Hotels Page",
          },
          {
            imgSrc: "monument-recognition-application-images/phone/8.jpg",
            imgTitle: "Nearby ATMs Page",
          },
          {
            imgSrc: "monument-recognition-application-images/phone/9.jpg",
            imgTitle: "Redirect to Google Map",
          },
        ],
      },
      demoLink:
        "https://github.com/samshrita/Monument-Recognition-System/releases/tag/APK_File",
         
      videoDemo: "https://www.youtube.com/embed/JQKLWwSyBII",
      projectRoute: RoutingLinks.projects + "/monument-recognition",
      hasNote: true,
      isFeatured: true,
      isLive: false,
      note: "Currently, the YOLO V7 model deployed on remote server is offline so, the app cannot do the monument identification. However, monument detection by the model running on the phone works as intended.",
      targetDevice: "phone",
      navlink: "monument-recognition",
    },



    {
      id: 2,
      orientation: 0,
      projectTitle: "DeepFake Detection Web Application",
      projectSmallTitle: "DeepFake Detection",
      projectType: "ml",
      projectCategory: ["Machine Learning", "Web Application"],
      description: (
        <p>
          The Deepfake Detection Web Application was a collaborative effort
          developed as part of our fourth-year computer engineering program. Our
          aim was to create a platform that detects whether uploaded videos are
          authentic or deepfake.
          <br></br>
          <br></br>
          To achieve this, we employed a detection model based on CNN with LSTM
          architecture. This model analyzes the temporal characteristics of
          facial movement within videos to determine their authenticity. We
          meticulously trained and tested the model using a dataset containing
          both real and deepfake videos.
          <br></br>
          <br></br>
          In terms of the application itself, we utilized ReactJS for the
          frontend development, ensuring an interactive and user-friendly
          experience. FastAPI, a Python-based web framework, served as the
          backbone for our backend inferencing server. This allowed seamless
          communication between the frontend and backend, enabling real-time
          analysis of uploaded videos.
          <br></br>
          <br></br>
          Moreover, our web application offers convenient account sign-in and
          sign-up features, enhancing user accessibility and personalization.
          With these features in place, users can easily access and manage their
          uploaded videos, contributing to a streamlined experience overall. For
          further project details, including the proposal and report, please
          visit the project&apos;s GitHub link.
        </p>
      ),
      miniDescription: (
        <p>
          Deepfake Video Detection addresses the emerging issue of AI generated videos redily available over internet. With this tool the deepfake video is detected with the model allowing user to know the video is deepfake or real.
        </p>
      ),


      techUsed: [
        {
          title: "Programming Language",
          technologies: [
            {
              title: "Python",
              imgSrc: "python-icon.png",
              imgAlt: "Python Programming Language",
              imgTitle: "Python Programming Language",
            },
            {
              title: "Javascript",
              imgSrc: "js-icon.png",
              imgAlt: "Javascript Programming Language",
              imgTitle: "Javascript Programming Language",
            },
          ],
        },
        {
          title: "Library",
          technologies: [
            {
              title: "React",
              imgSrc: "react-icon.png",
              imgAlt: "React",
              imgTitle: "React",
            },
          ],
        },
        {
          title: "Framework",
          technologies: [
            {
              title: "Pytorch",
              imgSrc: "pytorch-icon.png",
              imgAlt: "Pytorch Framework",
              imgTitle: "Pytorch Framework",
            },
          ],
        },

        {
          title: "Database",
          technologies: [
            {
              title: "PostgreSQL",
              imgSrc: "postgres-icon.png",
              imgAlt: "PostgreSQL Database",
              imgTitle: "PostgreSQL Database",
            },
          ],
        },
        {
          title: "Storage",
          technologies: [
            {
              title: "Bucket Storage",
              imgSrc: "bucket-icon.png",
              imgAlt: "Bucket Storage",
              imgTitle: "Bucket Storage",
            },
          ],
        },

        {
          title: "IDE Softwares",
          technologies: [
            {
              title: "Visual Studio Code",
              imgSrc: "vscode-icon.png",
              imgAlt: "Visual Studio Code IDE",
              imgTitle: "Visual Studio Code IDE",
            },
          ],
        },
      ],
      targetedPlatform: [
        { alt: "Web Platform", title: "Web Platform", src: "web-icon.png" },
      ],
      ghubLink: "https://github.com/samshrita/Deepfake-Video-Detection-",
      carouselImg: {
        web: [
          { imgSrc: "deepfake-detection-web-application-images/web/1.jpg", imgTitle: "Homepage" },
          { imgSrc: "deepfake-detection-web-application-images/web/2.jpg", imgTitle: "Google Sign In" },
          { imgSrc: "deepfake-detection-web-application-images/web/3.jpg", imgTitle: "Homepage After Signing In" },
          { imgSrc: "deepfake-detection-web-application-images/web/4.jpg", imgTitle: "Upload Video" },
          { imgSrc: "deepfake-detection-web-application-images/web/5.jpg", imgTitle: "Inferencing Video" },
          { imgSrc: "deepfake-detection-web-application-images/web/6.jpg", imgTitle: "Predicted Result" },
          { imgSrc: "deepfake-detection-web-application-images/web/7.jpg", imgTitle: "More Info on Prediction Result" },
          { imgSrc: "deepfake-detection-web-application-images/web/8.jpg", imgTitle: "Upload Video History" },
        ],

        phone: [],
      },
      demoLink: "https://deepfakedetection.me/",
      videoDemo: "https://www.youtube.com/embed/Tgo_5fGszJQ",
      projectRoute: RoutingLinks.projects + "/deepfake-detection",
      isFeatured: true,
      hasNote: true,
      isLive: true,
      note: "Currently, the detection model deployed on remote server is offline so, the app cannot perform the DeepFake detection.",
      targetDevice: "web",
      navlink: "deepfake-detection",
    },
  ];
}

export function TechnologyList() {
  return [
    {
      title: "Programming Language",
      technologies: [
        {
          title: "Python",
          imgSrc: "python-icon.png",
          imgAlt: "Python Programming Language",
          imgTitle: "Python Programming Language",
          isTechStack: true,
        },
        {
          title: "C#",
          imgSrc: "csharp-icon.png",
          imgAlt: "C# Programming Language",
          imgTitle: "C# Programming Language",
          isTechStack: false,
        },
        {
          title: "Javascript",
          imgSrc: "js-icon.png",
          imgAlt: "Javascript Programming Language",
          imgTitle: "Javascript Programming Language",
          isTechStack: true,
        },

        {
          title: "Java",
          imgSrc: "java-icon.png",
          imgAlt: "Java Programming Language",
          imgTitle: "Java Programming Language",
          isTechStack: true,
        },
        {
          title: "Kotlin",
          imgSrc: "kotlin-icon.png",
          imgAlt: "Kotlin Programming Language",
          imgTitle: "Kotlin Programming Language",
          isTechStack: false,
        },
      ],
    },

    {
      title: "Framework",
      technologies: [
        {
          title: "Django",
          imgSrc: "django-icon.png",
          imgAlt: "Django Framework",
          imgTitle: "Django Framework",
          isTechStack: true,
        },
        {
          title: "Flutter",
          imgSrc: "flutter-icon.png",
          imgAlt: "Flutter Framework",
          imgTitle: "Flutter Framework",
          isTechStack: true,
        },
        {
          title: "Tensorflow",
          imgSrc: "tensorflow-icon.png",
          imgAlt: "Tensorflow Framework",
          imgTitle: "Tensorflow Framework",
          isTechStack: true,
        },
        {
          title: "Pytorch",
          imgSrc: "pytorch-icon.png",
          imgAlt: "Pytorch Framework",
          imgTitle: "Pytorch Framework",
          isTechStack: true,
        },
      ],
    },
    {
      title: "Library",
      technologies: [
        {
          title: "React",
          imgSrc: "react-icon.png",
          imgAlt: "React",
          imgTitle: "React",
          isTechStack: true,
        },
        {
          title: "OpenStreetMap",
          imgSrc: "openstreetmaps-icon.png",
          imgAlt: "OpenStreetMap",
          imgTitle: "OpenStreetMap",
          isTechStack: false,
        },

        {
          title: "Selenium",
          imgSrc: "selenium-icon.png",
          imgAlt: "Selenium",
          imgTitle: "Selenium",
          isTechStack: false,
        },
      ],
    },
    {
      title: "Web Technologies",
      technologies: [
        {
          title: "HTML",
          imgSrc: "html-icon.png",
          imgAlt: "HTML",
          imgTitle: "HTML",
          isTechStack: true,
        },
        {
          title: "CSS",
          imgSrc: "css-icon.png",
          imgAlt: "CSS",
          imgTitle: "CSS",
          isTechStack: true,
        },

        {
          title: "Tailwind CSS",
          imgSrc: "tailwind-icon.png",
          imgAlt: "Tailwind CSS",
          imgTitle: "Tailwind CSS",
          isTechStack: true,
        },
      ],
    },

    {
      title: "Database",
      technologies: [
        {
          title: "MySQL",
          imgSrc: "mysql-icon.png",
          imgAlt: "MySQL Database",
          imgTitle: "MySQL Database",
          isTechStack: true,
        },
        {
          title: "PostgreSQL",
          imgSrc: "postgres-icon.png",
          imgAlt: "PostgreSQL Database",
          imgTitle: "PostgreSQL Database",
          isTechStack: true,
        },
      ],
    },
    {
      title: "Cloud Infrastructure and Service",
      technologies: [
        {
          title: "Microsoft Azure",
          imgSrc: "azure-icon.png",
          imgAlt: "Microsoft Azure",
          imgTitle: "Microsoft Azure",
          isTechStack: true,
        },
        {
          title: "Firebase",
          imgSrc: "firebase-icon.png",
          imgAlt: "Firebase Database",
          imgTitle: "Firebase Database",
          isTechStack: true,
        },
        {
          title: "AWS",
          imgSrc: "aws.png",
          imgAlt: "AWS",
          imgTitle: "AWS",
          isTechStack: true,
        },
      ],
    },
    {
      title: "IDE Softwares",
      technologies: [
        {
          title: "Visual Studio Code",
          imgSrc: "vscode-icon.png",
          imgAlt: "Visual Studio Code IDE",
          imgTitle: "Visual Studio Code IDE",
          isTechStack: true,
        },
        {
          title: "Android Studio",
          imgSrc: "android-studio-icon.png",
          imgAlt: "Android Studio IDE",
          imgTitle: "Android Studio IDE",
          isTechStack: true,
        },

        {
          title: "Unity",
          imgSrc: "unity-icon.png",
          imgAlt: "Unity Engine",
          imgTitle: "Unity Engine",
          isTechStack: false,
        },
      ],
    },
    {
      title: "Operating System",
      technologies: [
        {
          title: "Windows",
          imgSrc: "windows-icon.png",
          imgAlt: "Windows OS",
          imgTitle: "Windows OS",
          isTechStack: true,
        },
        {
          title: "Linux",
          imgSrc: "linux-icon.png",
          imgAlt: "Linux OS",
          imgTitle: "Linux OS",
          isTechStack: true,
        },

        {
          title: "Android",
          imgSrc: "android-icon.png",
          imgAlt: "Android OS",
          imgTitle: "Android OS",
          isTechStack: true,
        },
        
      ],
    },
  ];
}

export const RoutingLinks = {
  home: "/",
  projects: "/projects",
  about: "/about-me",
  education: "/education",
  experience:"/experience",
  blogs:"/blogs",
  contact: "/contact",
  resume: "resume.pdf",
  ghub: "https://github.com/samshrita",
  linkedin: "https://www.linkedin.com/in/samshrita/",
  X: "https://x.com/SamshritaGhimi2",
  mail: "mailto:ghimiresamshrita@gmail.com",
};

export const Gallery = {
  path: "gallery/",
  img: [
    { imgSrc: "16.jpg", imgAlt: "Graduation", imgTitle: "Graduation" },
    { imgSrc: "12.jpg", imgAlt: "Mountain", imgTitle: "Mountain" },
    { imgSrc: "15.jpg", imgAlt: "Kyanjin Ri", imgTitle: "Kyanjin Ri" },
    { imgSrc: "7.jpg", imgAlt: "ArtGallery", imgTitle: "ArtGallery" },
    { imgSrc: "17.jpg", imgAlt: "Ghandruk", imgTitle: "Ghandruk" },
    { imgSrc: "1.jpg", imgAlt: "Elephant", imgTitle: "Elephant" },
    { imgSrc: "11.jpg", imgAlt: "Futsal", imgTitle: "Futsal" },
    { imgSrc: "3.jpg", imgAlt: "Futsal-win", imgTitle: "Futsal-win" },
    { imgSrc: "4.jpg", imgAlt: "Swing", imgTitle: "Swing" },
    { imgSrc: "6.jpg", imgAlt: "Bike", imgTitle: "Bike" },
    { imgSrc: "10.jpg", imgAlt: "Costume", imgTitle: "Costume" },
    { imgSrc: "8.jpg", imgAlt: "Dress", imgTitle: "Dress" },   
     { imgSrc: "9.jpg", imgAlt: "Pigeon", imgTitle: "Pigeon" },
     { imgSrc: "2.jpg", imgAlt: "One Horned Rhino", imgTitle: "One Horned Rhino" },
     { imgSrc: "19.jpg", imgAlt: "Langtang", imgTitle: "Langtang" },
  ],
};
