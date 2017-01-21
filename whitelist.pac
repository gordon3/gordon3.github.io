 function FindProxyForURL(url, host) {

     if (
         false 
         || dnsDomainIs(host, "nd.gov") 
     ) 
         return "PROXY HTTP://127.0.0.1:52152";
     } else {
         return "DIRECT";
     }
     

 }
