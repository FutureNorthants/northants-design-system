import Uri from 'jsuri';


var uri = new Uri(window.location);

export const newsArticleData = {
  pageNumber: 1,
  totalResults: 23,
  sortBy: (uri.hasQueryParam('sortBy')) ? uri.getQueryParamValue('sortBy') : 'recentAsc',
  articleType: (uri.hasQueryParam('articleType')) ? uri.getQueryParamValue('articleType').split(',') : ['article', 'press-release'],
  services: (uri.hasQueryParam('services')) ? uri.getQueryParamValue('services') : 'all-services',
  searchTerm: (uri.hasQueryParam('searchTerm')) ? uri.getQueryParamValue('searchTerm') : undefined,
  results: [
    {
      "id": "6036694e465dd0e61e7f784e",
      "title": "Pariatur sint occaecat sit eiusmod proident id dolor eiusmod consectetur Lorem exercitation.",
      "excerpt": "Sint Lorem consectetur in commodo esse culpa anim id. Consectetur occaecat sint sit consectetur aliquip irure eiusmod quis minim. Excepteur tempor aliquip dolor voluptate id exercitation dolore est est.\r\n",
      "date": 1614178638,
      "image720x405": "",
      "image72x41": "",
      "url": "http://"
    },
    {
      "id": "6036694e9c7a21251cde2d6d",
      "title": "Voluptate Lorem mollit mollit ex in mollit dolore cupidatat fugiat nulla dolore esse nostrud sit.",
      "excerpt": "Eu mollit ea laboris et proident occaecat velit in incididunt aliqua velit duis. Enim elit incididunt aliqua id minim nostrud Lorem. Esse quis velit nostrud anim aliquip veniam cupidatat fugiat aliqua.\r\n",
      "date": 1614178638,
      "image720x405": "",
      "image72x41": "",
      "url": "http://"
    },
    {
      "id": "6036694e077bf233656296e2",
      "title": "Id magna in labore non aliquip Lorem ad est irure culpa reprehenderit incididunt ut eiusmod.",
      "excerpt": "Cupidatat veniam minim nulla sint et quis quis esse laborum. Qui eu id nostrud dolore et ipsum nostrud nisi incididunt. Sint dolor ea proident adipisicing officia aliqua ea mollit duis sint ipsum aute ut. Irure non do veniam minim quis. Esse commodo sint occaecat occaecat. Ex ea nulla pariatur est.\r\n",
      "date": 1614178638,
      "image720x405": "",
      "image72x41": "",
      "url": "http://"
    },
    {
      "id": "6036694e95f7c8c6729a46bf",
      "title": "Veniam nostrud excepteur elit non cupidatat deserunt sunt amet ad ipsum sunt incididunt.",
      "excerpt": "Et qui culpa cillum sunt eu laboris nisi adipisicing esse. Elit sunt commodo qui eu est sit id dolor tempor non nisi. Ea do incididunt ad ea ut aliqua laboris cupidatat incididunt exercitation sit quis consequat duis. Do voluptate sunt eu aliquip id irure ad eu quis occaecat. Occaecat duis eiusmod aliqua ad incididunt laboris duis.\r\n",
      "date": 1614178638,
      "image720x405": "https://core-cms.bfi.org.uk/sites/default/files/styles/responsive/public/1440/810/1/2020-08/bfi-film-academy-2020-recruitment-campaign-watershed-two-girls-behind-camera.jpeg",
      "url": "http://"
    },
    {
      "id": "6036694eef56d541aa47dede",
      "title": "Enim fugiat magna duis amet ex non consectetur occaecat sunt.",
      "excerpt": "Occaecat proident enim et do excepteur ad commodo. Culpa occaecat cupidatat cupidatat adipisicing amet. Sit quis ipsum aute reprehenderit cupidatat tempor et non esse veniam deserunt anim eu.\r\n",
      "date": 1614178638,
      "image720x405": "",
      "image72x41": "",
      "url": "http://"
    },
    {
      "id": "6036694e17e1a74fadef2ce1",
      "title": "Officia ut ut et consectetur in mollit enim qui.",
      "excerpt": "Enim do ex dolor et fugiat ea minim consequat occaecat non nostrud amet commodo. Consectetur duis ut consectetur nulla enim fugiat consequat fugiat. Magna consequat eiusmod exercitation quis irure. Nisi consectetur duis sit non. Ut sint aliqua magna labore nostrud commodo. Dolore adipisicing dolore cillum officia aliqua non.\r\n",
      "date": 1614178638,
      "image720x405": "",
      "image72x41": "",
      "url": "http://"
    },
    {
      "id": "6036694e71b8eedb00cff39f",
      "title": "Non minim ad ullamco exercitation pariatur eu dolor occaecat ullamco culpa excepteur cillum irure.",
      "excerpt": "Nulla tempor qui reprehenderit qui. Est esse irure nulla ea veniam mollit consectetur velit. Sunt anim incididunt et dolore sunt ullamco. Eiusmod reprehenderit sunt adipisicing eu irure ullamco nulla cillum esse pariatur.\r\n",
      "date": 1614178638,
      "image720x405": "https://core-cms.bfi.org.uk/sites/default/files/styles/responsive/public/1440/810/1/2020-08/bfi-film-academy-2020-recruitment-campaign-watershed-two-girls-behind-camera.jpeg",
      "url": "http://"
    },
    {
      "id": "6036694ebe79bca7b2299ec2",
      "title": "Fugiat exercitation cillum velit culpa sunt labore excepteur nostrud Lorem adipisicing do ea.",
      "excerpt": "Esse commodo eu occaecat exercitation ad officia ex adipisicing minim. Nulla voluptate mollit adipisicing aute excepteur commodo ut. Eiusmod adipisicing minim elit aute officia mollit nulla cupidatat. Pariatur sunt pariatur et adipisicing qui aute ad tempor dolor ex magna voluptate. Elit nulla in consectetur quis deserunt officia.\r\n",
      "date": 1614178638,
      "image720x405": "",
      "image72x41": "",
      "url": "http://"
    },
    {
      "id": "6036694e8965f7c152ac258b",
      "title": "Sit nostrud fugiat magna elit ex nisi veniam nulla elit.",
      "excerpt": "Aute excepteur exercitation amet adipisicing ad ex cupidatat fugiat quis do. Magna laborum elit dolore do eiusmod aliqua nostrud officia tempor anim ex. Officia exercitation amet sunt ullamco dolore mollit nulla velit et et tempor adipisicing ea. Mollit sit laborum occaecat commodo laborum et nisi sit.\r\n",
      "date": 1614178638,
      "image720x405": "",
      "image72x41": "",
      "url": "http://"
    },
    {
      "id": "6036694e41556f89cd360cb7",
      "title": "Commodo nostrud laboris fugiat id occaecat proident culpa eu cillum labore sint.",
      "excerpt": "Enim Lorem esse reprehenderit elit magna dolore aute ea fugiat in consectetur ea. Dolor laboris id veniam enim ullamco consectetur voluptate adipisicing aliquip fugiat proident duis proident. Magna laborum exercitation consectetur veniam excepteur eu deserunt commodo consequat consequat eiusmod aliquip laborum sunt. Anim ex excepteur anim sint minim sint incididunt tempor est fugiat cillum sint aliquip et. Reprehenderit laboris enim veniam est incididunt dolore laboris. Aliqua mollit enim esse quis ea non cillum non veniam.\r\n",
      "date": 1614178638,
      "image720x405": "",
      "image72x41": "",
      "url": "http://"
    },
    {
      "id": "6036694ecc9e7276dc159e04",
      "title": "Ad incididunt id dolor eu duis dolor veniam consectetur veniam aute dolore irure minim.",
      "excerpt": "Nostrud ullamco elit sint laborum veniam laboris adipisicing. Officia ex aute est proident nostrud proident. Id pariatur pariatur duis aliquip non laboris consectetur cillum ea. Laborum exercitation eu proident ut.\r\n",
      "date": 1614178638,
      "image720x405": "",
      "image72x41": "",
      "url": "http://"
    },
    {
      "id": "6036694e8654d2682a789f4f",
      "title": "Officia dolore cillum amet adipisicing esse exercitation cillum.",
      "excerpt": "Anim exercitation ut occaecat adipisicing proident enim eu mollit. Labore reprehenderit aliqua elit veniam. In officia elit labore pariatur cillum qui labore consequat Lorem amet voluptate excepteur laboris incididunt. Ut nulla sit magna amet est laborum laboris excepteur exercitation ut consectetur mollit eiusmod. Irure nulla nostrud aliqua eu irure eiusmod dolore incididunt. Reprehenderit veniam proident deserunt aute do nulla occaecat et laborum quis in ullamco tempor dolor.\r\n",
      "date": 1614178638,
      "image720x405": "",
      "image72x41": "",
      "url": "http://"
    },
    {
      "id": "6036694ed3c1de9114024a02",
      "title": "In sint incididunt dolor officia consectetur proident mollit exercitation magna.",
      "excerpt": "Cillum occaecat eiusmod pariatur cillum Lorem sunt pariatur proident aliquip pariatur aute nostrud. Veniam aliqua qui id consectetur sit incididunt. Sint non voluptate adipisicing anim. Amet tempor id in adipisicing sunt. Aliquip dolore ipsum occaecat officia anim aliqua minim consequat Lorem ipsum.\r\n",
      "date": 1614178638,
      "image720x405": "https://core-cms.bfi.org.uk/sites/default/files/styles/responsive/public/1440/810/1/2020-08/bfi-film-academy-2020-recruitment-campaign-watershed-two-girls-behind-camera.jpeg",
      "url": "http://"
    },
    {
      "id": "6036694ee56092fb2d5a1d2e",
      "title": "Nisi ut consequat elit nulla proident est eu ullamco velit cupidatat minim officia est.",
      "excerpt": "Et ad nostrud nostrud quis enim laborum ea. Amet sit amet amet laboris Lorem exercitation. Magna laboris ex dolore do officia veniam. Excepteur enim occaecat tempor reprehenderit. Enim ex nostrud nisi veniam magna ad ipsum in do. Incididunt ullamco proident fugiat duis ea velit ullamco sint. Exercitation eu veniam officia occaecat ullamco cillum do fugiat in Lorem mollit cillum.\r\n",
      "date": 1614178638,
      "image720x405": "",
      "image72x41": "",
      "url": "http://"
    }
  ]
}
