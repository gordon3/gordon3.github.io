function FindProxyForURL(url, host) 
{
    
    if (
        false 
        || dnsDomainIs(host, "youtube.com") || dnsDomainIs(host, ".slither.io") 
        || shExpMatch(url, "*slither*"))
       ) 
    {
        return "PROXY HTTP://127.0.0.1:52152";
    } 
    
    if (
        false 
        || dnsDomainIs(host, "googlesyndication.com") || dnsDomainIs(host, ".googlesyndication.com") 
        || dnsDomainIs(host, "doubleclick.net") || dnsDomainIs(host, ".doubleclick.net") 
        || dnsDomainIs(host, "keywordblocks.com") || dnsDomainIs(host, ".keywordblocks.com") 
        || dnsDomainIs(host, "smartadserver.com") || dnsDomainIs(host, ".smartadserver.com")  
        || dnsDomainIs(host, "ipredictive.com") || dnsDomainIs(host, ".ipredictive.com") 
        || dnsDomainIs(host, "adbrn.com") || dnsDomainIs(host, ".adbrn.com") 
        || dnsDomainIs(host, "moatads.com") || dnsDomainIs(host, ".moatads.com") 
        || dnsDomainIs(host, "postrelease.com") || dnsDomainIs(host, ".postrelease.com") 
        || dnsDomainIs(host, "vidora.com") || dnsDomainIs(host, ".vidora.com") 
        || dnsDomainIs(host, "nr-data.net") || dnsDomainIs(host, ".nr-data.net")  
        || dnsDomainIs(host, "cxense.net") || dnsDomainIs(host, ".cxense.net") 
       ) 
    {
        return "PROXY HTTP://127.0.0.1:52152";
    } 
    return "DIRECT";
}
