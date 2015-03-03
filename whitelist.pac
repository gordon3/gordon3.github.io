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

         || dnsDomainIs(host, "wikipedia.org") || dnsDomainIs(host, ".wikipedia.org") 
         || dnsDomainIs(host, "wikimedia.org") || dnsDomainIs(host, ".wikimedia.org")

         || dnsDomainIs(host, "microsoft.com") || dnsDomainIs(host, ".microsoft.com") 
         
         || dnsDomainIs(host, "mozilla.org") || dnsDomainIs(host, ".mozilla.org")

         || dnsDomainIs(host, "twitter.com") || dnsDomainIs(host, ".twitter.com") 
         || dnsDomainIs(host, "twimg.com") || dnsDomainIs(host, ".twimg.com")

         || dnsDomainIs(host, "technet.com") || dnsDomainIs(host, ".technet.com")

         || dnsDomainIs(host, "godaddy.com") || dnsDomainIs(host, ".godaddy.com")

     ) {
         return "DIRECT";
     }
     return "PROXY HTTP://127.0.0.1:52152";
 }
