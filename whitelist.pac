function FindProxyForURL(url, host) 
{
    if (
        false 
        || dnsDomainIs(host, "googlesyndication.com") || dnsDomainIs(host, ".googlesyndication.com") 
        || dnsDomainIs(host, "doubleclick.net") || dnsDomainIs(host, ".doubleclick.net") 
        || dnsDomainIs(host, "keywordblocks.com") || dnsDomainIs(host, ".keywordblocks.com") 
       ) 
    {
        return "PROXY HTTP://127.0.0.1:52152";
    } 
    return "DIRECT";
}
