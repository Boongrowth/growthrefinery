 // Initialize Firebase
    var firebaseConfig = {
        apiKey: "AIzaSyAtVvPjdsj84mWqaG4-7SyjbljCnslZ1SM",
        authDomain: "hendaa-1.firebaseapp.com",
        projectId: "hendaa-1",
        storageBucket: "hendaa-1.appspot.com",
        messagingSenderId: "831134776479",
        appId: "1:831134776479:web:56cd7098fc69cd70a376aa"
    };
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();

    function fetchAllNews() {
             var articlesSection = document.getElementById("articlesSection");
        var familyNewsSection = document.getElementById("familyNewsSection");
        var sportsNewsSection = document.getElementById("sportsNewsSection");

        var collections = [
            { name: "articles", section: articlesSection, template: fullCardTemplate }
      

    ];


        collections.forEach(function(collection) {
            db.collection(collection.name).orderBy("timestamp", "desc").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    var post = doc.data();
                    var postId = doc.id;
                    collection.section.innerHTML += collection.template(post, postId, collection.name);
                });
            });
        });
    }

    function fullCardTemplate(post, postId, collectionName) {
        return `
                    <li>
              <div class="blog-card">

                <figure class="card-banner img-holder" style="--width: 550; --height: 360;">
                  <img src="${post.featuredImage}" width="550" height="660" loading="lazy"
                    alt="${post.title}" class="img-cover">

                  <ul class="avatar-list absolute">





                  </ul>
                </figure>

                <div class="card-content">

                  <ul class="card-meta-list">

                    <li>
                      <a href="#" class="card-tag">Lifestyle</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">People</a>
                    </li>

                    <li>
                      <a href="#" class="card-tag">Review</a>
                    </li>

                  </ul>

                  <h3 class="h4">
                    <a href="fullboon2.html?id=${postId}" class="card-title hover:underline">
                      ${post.title}
                    </a>
                  </h3>

                  <p class="card-text">
                    ${post.tags}
                  </p>

                </div>
                            <a href="fullboon2.html?id=${postId}" class="read-more">Read More</a>
              </div>
            </li>
            `;
    }

    function gridTemplate(post, postId) {
        return `
      <li class="news-item">
        <img src="${post.featuredImage}" alt="${post.title}" alt="">
        <div class="news-content">
          <p>BUSINESS</p>
          <h3><a href="article-title"><a href="fullboon2.html?id=${postId}" class="news-link">${post.title}</a></h3>
        </div>
      </li>
      
        `;
    }

    function sportsTemplate(post, postId) {
        return `
     <li class="news-item">
        <img src="${post.featuredImage}" alt="${post.title}" alt="">
        <div class="news-content">
          <p>BUSINESS</p>
          <h3><a href="article-title"><a href="fullboon2.html?id=${postId}" class="news-link">${post.title}</a></h3>
        </div>
      </li>
        `;
    }
    function techTemplate(post, postId) {
        return `
      <li class="news-item">
        <img src="${post.featuredImage}" alt="${post.title}" alt="">
        <div class="news-content">
          <p>BUSINESS</p>
          <h3><a href="article-title"><a href="fullboon2.html?id=${postId}" class="news-link">${post.title}</a></h3>
        </div>
      </li>
      
        `;
    }

    function businessTemplate(post, postId) {
        return `
     <li class="news-item">
        <img src="${post.featuredImage}" alt="${post.title}" alt="">
        <div class="news-content">
          <p>BUSINESS</p>
          <h3><a href="article-title"><a href="fullboon2.html?id=${postId}" class="news-link">${post.title}</a></h3>
        </div>
      </li>
        `;
    }
    function eduTemplate(post, postId) {
        return `
     <li class="news-item">
        <img src="${post.featuredImage}" alt="${post.title}" alt="">
        <div class="news-content">
          <p>BUSINESS</p>
          <h3><a href="article-title"><a href="fullboon2.html?id=${postId}" class="news-link">${post.title}</a></h3>
        </div>
      </li>
        `;
    }


// 

    // Fetch all news articles on page load
    fetchAllNews();
