const images = [
    {"CourageAndFam" : "gallery-img/CourageAndFam.png",
    "caption" : ""
    },
    {"GlenAndGroup" : "gallery-img/GlenAndGroup",
    "caption" : ""
    },
    {"JanetTheGoat" : "gallery-img/JanetTheGoat",
    "caption" : ""
    },
    {"NeeganTheGoat" : "gallery-img/NeeganTheGoat",
    "caption" : ""
    },
    {"OprahAndFollowers" : "gallery-img/OprahAndFollowers",
    "caption" : ""
    },
    {"SargeTheGoat" : "gallery-img/SargeTheGoat",
    "caption" : ""
    },
    {"PlaceholderImg" : "loremflickr.com/200/200/goats/",
    "caption" : "This is a placeholder image. There is no telling what you are loooking at."
    }
]

const imagesString = JSON.stringify(images)

localStorage.setItem("images", imagesString)