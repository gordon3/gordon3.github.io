 function FindProxyForURL(url, host) {

     if (
         isInNet(host, "10.0.0.0", "255.0.0.0") 
         || isInNet(host, "127.0.0.1", "255.255.255.255") 
         || dnsDomainIs(host, "nd.gov") 
         || shExpMatch(host, "*.nd.gov")
     ) {
         return "DIRECT";
     }
     
     if (
     	 dnsDomainIs(host, "gordon3.com") || dnsDomainIs(host, ".gordon3.com") 
     	 
         || dnsDomainIs(host, "basecamp.com") || dnsDomainIs(host, ".basecamp.com")
         || dnsDomainIs(host, "37signals.com") || dnsDomainIs(host, ".37signals.com")
         || dnsDomainIs(host, "cdn.37img.com") || dnsDomainIs(host, ".cdn.37img.com")
         
         || dnsDomainIs(host, "bbc.co.uk") || dnsDomainIs(host, ".bbc.co.uk")
         || dnsDomainIs(host, "bbc.com") || dnsDomainIs(host, ".bbc.com")
         || dnsDomainIs(host, "static.bbci.co.uk") || dnsDomainIs(host, "static.bbci.co.uk")
         || dnsDomainIs(host, "ichef.bbci.co.uk") || dnsDomainIs(host, "ichef.bbci.co.uk")
         || dnsDomainIs(host, "news.bbcimg.co.uk") || dnsDomainIs(host, "news.bbcimg.co.uk")
         
         || dnsDomainIs(host, "apple.com") || dnsDomainIs(host, ".apple.com") 
         
         || dnsDomainIs(host, "youtube.com") || dnsDomainIs(host, ".youtube.com") 
         || dnsDomainIs(host, "ytimg.com") || dnsDomainIs(host, ".ytimg.com") 
         || dnsDomainIs(host, "googlevideo.com") || dnsDomainIs(host, ".googlevideo.com") 
         
         || dnsDomainIs(host, "google.com") || dnsDomainIs(host, ".google.com") 
         || dnsDomainIs(host, "gmail.com") || dnsDomainIs(host, ".gmail.com")
         || dnsDomainIs(host, "gstatic.com") || dnsDomainIs(host, ".gstatic.com")
         
         || dnsDomainIs(host, "github.com") || dnsDomainIs(host, ".github.com")
         || dnsDomainIs(host, "githubusercontent.com") || dnsDomainIs(host, ".githubusercontent.com")
         
         || dnsDomainIs(host, "amazon.com") || dnsDomainIs(host, ".amazon.com") 
         || dnsDomainIs(host, "images-amazon.com") || dnsDomainIs(host, ".images-amazon.com")

         || dnsDomainIs(host, "stackexchange.com") || dnsDomainIs(host, ".stackexchange.com")
         || dnsDomainIs(host, "stackoverflow.com") || dnsDomainIs(host, ".stackoverflow.com") 
         || dnsDomainIs(host, "sstatic.net") || dnsDomainIs(host, ".sstatic.net") 
         || dnsDomainIs(host, "stack.imgur.com") || dnsDomainIs(host, ".stack.imgur.com") 
         || dnsDomainIs(host, "ajax.googleapis.com") || dnsDomainIs(host, ".ajax.googleapis.com")

         || dnsDomainIs(host, "facebook.com") || dnsDomainIs(host, ".facebook.com") 
         || dnsDomainIs(host, "fbcdn.net") || dnsDomainIs(host, ".fbcdn.net") 
         || (dnsDomainIs(host, ".akamaihd.net") && shExpMatch(host, "fbexternal*.akamaihd.net")) 
         || (dnsDomainIs(host, ".akamaihd.net") && shExpMatch(host, "fbstatic*.akamaihd.net")) 
         || (dnsDomainIs(host, ".akamaihd.net") && shExpMatch(host, "fbcdn*.akamaihd.net"))

         || dnsDomainIs(host, "wikipedia.com") || dnsDomainIs(host, ".wikipedia.com") 
         || dnsDomainIs(host, "wikipedia.org") || dnsDomainIs(host, ".wikipedia.org") 
         || dnsDomainIs(host, "wikimedia.org") || dnsDomainIs(host, ".wikimedia.org")

         || dnsDomainIs(host, "microsoft.com") || dnsDomainIs(host, ".microsoft.com") 
         || dnsDomainIs(host, "sec.s-msft.com") || dnsDomainIs(host, ".sec.s-msft.com") 
         || dnsDomainIs(host, "aspnetcdn.com") || dnsDomainIs(host, ".aspnetcdn.com") 
         
         || dnsDomainIs(host, "mozilla.org") || dnsDomainIs(host, ".mozilla.org")

         || dnsDomainIs(host, "twitter.com") || dnsDomainIs(host, ".twitter.com") 
         || dnsDomainIs(host, "twimg.com") || dnsDomainIs(host, ".twimg.com")

         || dnsDomainIs(host, "technet.com") || dnsDomainIs(host, ".technet.com")

         || dnsDomainIs(host, "godaddy.com") || dnsDomainIs(host, ".godaddy.com")
         
         || dnsDomainIs(host, "middakotaclinic.com") || dnsDomainIs(host, ".middakotaclinic.com")
         || dnsDomainIs(host, "mymdcchart.com") || dnsDomainIs(host, ".mymdcchart.com")
         || dnsDomainIs(host, "athenahealth.com") || dnsDomainIs(host, ".athenahealth.com")

         || dnsDomainIs(host, "capcu.org") || dnsDomainIs(host, ".capcu.org")
         
         || dnsDomainIs(host, "discovercard.com") || dnsDomainIs(host, ".discovercard.com")
         || dnsDomainIs(host, "discover.com") || dnsDomainIs(host, ".discover.com")
      
         || dnsDomainIs(host, "chase.com") || dnsDomainIs(host, ".chase.com")
         
         || dnsDomainIs(host, "huffingtonpost.com") || dnsDomainIs(host, ".huffingtonpost.com")
         || dnsDomainIs(host, "s.huffpost.com") || dnsDomainIs(host, ".s.huffpost.com")
         || dnsDomainIs(host, "i.huffpost.com") || dnsDomainIs(host, ".i.huffpost.com")
         || (dnsDomainIs(host, ".huffpost.com") && shExpMatch(host, "s*.huffpost.com")) 
         
         || dnsDomainIs(host, "git-scm.com") || dnsDomainIs(host, ".git-scm.com")
         || dnsDomainIs(host, "googleapis.com") || dnsDomainIs(host, ".googleapis.com")
         
         || dnsDomainIs(host, "particular.net") || dnsDomainIs(host, ".particular.net")
         || dnsDomainIs(host, "google-code-prettify.googlecode.com") || dnsDomainIs(host, ".google-code-prettify.googlecode.com")
         || dnsDomainIs(host, "liveparticularwebstr.blob.core.windows.net") || dnsDomainIs(host, ".liveparticularwebstr.blob.core.windows.net")
         
         || dnsDomainIs(host, "webmail.state.nd.us")
         
         || dnsDomainIs(host, "marthastewart.com") || dnsDomainIs(host, ".marthastewart.com")
         
         || dnsDomainIs(host, "kingarthurflour.com") || dnsDomainIs(host, ".kingarthurflour.com")
         
         || dnsDomainIs(host, "redbox.com") || dnsDomainIs(host, ".redbox.com")
         
         || dnsDomainIs(host, "trello.com") || dnsDomainIs(host, ".trello.com")
         || dnsDomainIs(host, "cloudfront.net") || dnsDomainIs(host, ".cloudfront.net")
         
         || dnsDomainIs(host, "hpconnect.com") || dnsDomainIs(host, ".hpconnect.com")
         
         || dnsDomainIs(host, "samsclub.com") || dnsDomainIs(host, ".samsclub.com")
     ) {
         return "DIRECT";
     }
     return "PROXY HTTP://127.0.0.1:52152";
 }
