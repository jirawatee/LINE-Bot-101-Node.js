const linepay = () => ({
  "type": "flex",
  "altText": "Flex Message",
  "contents": {
    "type": "bubble",
    "body": {
      "type": "box",
      "layout": "vertical",
      "spacing": "md",
      "contents": [
        {
          "type": "box",
          "layout": "vertical",
          "spacing": "sm",
          "contents": [
            {
              "type": "box",
              "layout": "baseline",
              "contents": [
                {
                  "type": "text",
                  "text": "Burger",
                  "weight": "bold",
                  "margin": "sm",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": "1฿",
                  "size": "sm",
                  "align": "end",
                  "color": "#aaaaaa"
                }
              ]
            }
          ]
        }
      ]
    },
    "footer": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "button",
          "style": "primary",
          "color": "#905c44",
          "action": {
            "type": 'postback',
            "label": "burger",
            "data": "item=burger"
          }
        }
      ]
    }
  }
});

const linehack = (data) => ({
  "type": "flex",
  "altText": "Flex Message",
  "contents": {
    "type": "bubble",
    "size": "giga",
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "image",
              "url": "https://mokmoon.com/images/LINEDEV.png",
              "aspectRatio": "3:1",
              "size": "lg",
              "align": "start",
              "flex": 1
            },
            {
              "type": "image",
              "url": "https://mokmoon.com/images/GDGBKK.png",
              "aspectRatio": "3:1",
              "size": "lg",
              "align": "start",
              "flex": 2,
              "margin": "none"
            }
          ],
          "paddingStart": "12%"
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "xxx",
              "contents": [
                {
                  "type": "span",
                  "text": "LINE HACK 2020",
                  "size": "3xl",
                  "color": "#ffffff",
                  "weight": "bold"
                },
                {
                  "type": "span",
                  "text": ";",
                  "weight": "bold",
                  "color": "#0053ea",
                  "size": "3xl"
                }
              ]
            },
            {
              "type": "text",
              "text": data.title,
              "color": "#00ff00",
              "weight": "bold",
              "size": "lg",
              "margin": "lg"
            },
            {
              "type": "text",
              "text": data.date,
              "color": "#ffffff",
              "weight": "bold",
              "size": "lg"
            }
          ],
          "paddingStart": "12%",
          "paddingTop": "4%",
          "paddingBottom": "8%",
          "paddingEnd": "8%"
        },
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "box",
              "layout": "vertical",
              "contents": [],
              "height": "32px",
              "cornerRadius": "sm",
              "background": {
                "type": "linearGradient",
                "angle": "0deg",
                "startColor": "#002e83",
                "endColor": "#0053ea",
                "centerColor": "#0053ea",
                "centerPosition": "32%"
              },
              "width": "12%"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [],
              "height": "32px",
              "cornerRadius": "sm",
              "background": {
                "type": "linearGradient",
                "angle": "0deg",
                "startColor": "#002e83",
                "endColor": "#0053ea",
                "centerColor": "#0053ea",
                "centerPosition": "32%"
              },
              "margin": "48px",
              "width": "64%"
            }
          ],
          "margin": "xxl"
        },
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "box",
              "layout": "vertical",
              "contents": [],
              "width": "24%",
              "height": "32px",
              "cornerRadius": "sm",
              "background": {
                "type": "linearGradient",
                "angle": "0deg",
                "startColor": "#002e83",
                "endColor": "#0053ea",
                "centerColor": "#0053ea",
                "centerPosition": "32%"
              }
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [],
              "background": {
                "type": "linearGradient",
                "angle": "0deg",
                "startColor": "#008215",
                "endColor": "#00ea23",
                "centerColor": "#00ea23",
                "centerPosition": "32%"
              },
              "height": "32px",
              "width": "28%",
              "cornerRadius": "sm",
              "margin": "48px"
            }
          ],
          "margin": "xl"
        },
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "box",
              "layout": "vertical",
              "contents": [],
              "width": "25%",
              "height": "32px",
              "cornerRadius": "sm",
              "background": {
                "type": "linearGradient",
                "angle": "0deg",
                "startColor": "#002e83",
                "endColor": "#0053ea",
                "centerColor": "#0053ea",
                "centerPosition": "32%"
              }
            }
          ],
          "margin": "xl",
          "paddingStart": "12%"
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "HACK_CONNECT_TOMORROW_",
              "weight": "bold",
              "color": "#0053ea"
            }
          ],
          "paddingStart": "12%",
          "margin": "xxl"
        }
      ],
      "paddingBottom": "8%",
      "paddingEnd": "none",
      "paddingStart": "none",
      "paddingTop": "8%"
    },
    "styles": {
      "header": {
        "backgroundColor": "#1b1b1b"
      },
      "hero": {
        "backgroundColor": "#1b1b1b"
      },
      "body": {
        "backgroundColor": "#1b1b1b"
      }
    }
  }
});

module.exports = { linehack, linepay };