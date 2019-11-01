
/*
** Read the README.md document at the below link for detailed instructions on how to use this snippet.
** Links: https://github.com/artystable/Cookieless-Google-Analytics/edit/master/README.md 
*/

// When function runs, create user fingerprint and trigger a gtag (Google Analytics) log with fingerprinted (annonymous) user data.
(function(){
  
    let mytGtag = 'UA-123456789-1';
    let userId = new Fingerprint().get()
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', mytGtag,
                    {
                        'user_id': userId,
                        'anonymize_ip': true
                    }
    );

}());