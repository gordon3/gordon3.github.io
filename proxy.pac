function FindProxyForURL(url, host) {

if (dnsDomainIs(host, ".github.com")) {
  return "DIRECT";
}  

if (dnsDomainIs(host, ".githubusercontent.com")) {
  return "DIRECT";
}  

if (dnsDomainIs(host, ".gordon3.com")) {
  return "DIRECT";
}  

return "PROXY http://127.0.0.1:10101";

} // End of function
