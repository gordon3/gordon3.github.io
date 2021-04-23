function FindProxyForURL(url, host) {

if (dnsDomainIs(host, ".github.com")) {
  return "DIRECT";
}  githubusercontent

if (dnsDomainIs(host, ".githubusercontent.com")) {
  return "DIRECT";
}  

return "PROXY http://127.0.0.1:10101";

} // End of function
