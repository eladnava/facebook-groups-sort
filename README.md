# Date Sort for Facebook™ Groups

A chrome extension that sorts the Facebook™ Buy &amp; Sell groups' search results by date (newest first).

> Note: This extension is not officially endorsed by Facebook™.

# Live Demo

[See results sorted by date](https://www.facebook.com/groups/507060923027883/search/?q=toyota&filters=eyJycF9jaHJvbm9fc29ydDowIjoie1wibmFtZVwiOlwiY2hyb25vc29ydFwiLFwiYXJnc1wiOlwiXCJ9IiwiZmlsdGVyX2JzZ19zZWFyY2hfbGF5b3V0OjAiOiJ7XCJuYW1lXCI6XCJmaWx0ZXJfYnNnX3NlYXJjaF9saXN0X2xheW91dFwiLFwiYXJnc1wiOlwiXCJ9In0%3D)

# Usage

1. Install the extension
2. Search inside a Facebook™ group
3. The page will reload and all results will be sorted chronologically (desc)

# Behind the Scenes

The following `&filters=` value is added to the page URL to sort the results by date (desc):
```
{
    "rp_chrono_sort:0": "{\"name\":\"chronosort\",\"args\":\"\"}",
    "filter_bsg_search_layout:0": "{\"name\":\"filter_bsg_search_list_layout\",\"args\":\"\"}"
}
```

The param is set as a Base64-encoded string:
```
&filters=eyJycF9jaHJvbm9fc29ydDowIjoie1wibmFtZVwiOlwiY2hyb25vc29ydFwiLFwiYXJnc1wiOlwiXCJ9IiwiZmlsdGVyX2JzZ19zZWFyY2hfbGF5b3V0OjAiOiJ7XCJuYW1lXCI6XCJmaWx0ZXJfYnNnX3NlYXJjaF9saXN0X2xheW91dFwiLFwiYXJnc1wiOlwiXCJ9In0%3D
```

## License

[Apache 2.0](LICENSE)
