export default async (req, res) => {
  const resp = await fetch(
    "https://www.web2pdfconvert.com/convert/web/to/pdf?storefile=true&filename=alexrohleder-com",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-GB,en;q=0.9,en-US;q=0.8,pt;q=0.7",
        "cache-control": "no-cache",
        "content-type":
          "multipart/form-data; boundary=----WebKitFormBoundaryD5w4WoRC6ofhOJic",
        pragma: "no-cache",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        cookie:
          '__cfduid=d28e9dca77764b7b7697b9e10dcbb03551618751124; paddlejs_checkout_variant={"inTest":true,"controlGroup":false,"isForced":false,"variant":"multipage-radio-payment"}; paddlejs_campaign_referrer=www.google.com',
      },
      referrer: "https://www.web2pdfconvert.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body:
        '------WebKitFormBoundaryD5w4WoRC6ofhOJic\r\nContent-Disposition: form-data; name="url"\r\n\r\nhttp://alexrohleder.com\r\n------WebKitFormBoundaryD5w4WoRC6ofhOJic\r\nContent-Disposition: form-data; name="pricing"\r\n\r\nmonthly\r\n------WebKitFormBoundaryD5w4WoRC6ofhOJic\r\nContent-Disposition: form-data; name="ConversionDelay"\r\n\r\n0\r\n------WebKitFormBoundaryD5w4WoRC6ofhOJic\r\nContent-Disposition: form-data; name="CookieConsentBlock"\r\n\r\ntrue\r\n------WebKitFormBoundaryD5w4WoRC6ofhOJic\r\nContent-Disposition: form-data; name="Zoom"\r\n\r\n1\r\n------WebKitFormBoundaryD5w4WoRC6ofhOJic\r\nContent-Disposition: form-data; name="FixedElements"\r\n\r\nabsolute\r\n------WebKitFormBoundaryD5w4WoRC6ofhOJic\r\nContent-Disposition: form-data; name="ViewportWidth"\r\n\r\n1366\r\n------WebKitFormBoundaryD5w4WoRC6ofhOJic\r\nContent-Disposition: form-data; name="ViewportHeight"\r\n\r\n800\r\n------WebKitFormBoundaryD5w4WoRC6ofhOJic\r\nContent-Disposition: form-data; name="PageOrientation"\r\n\r\nportrait\r\n------WebKitFormBoundaryD5w4WoRC6ofhOJic\r\nContent-Disposition: form-data; name="PageRange"\r\n\r\n1-20\r\n------WebKitFormBoundaryD5w4WoRC6ofhOJic\r\nContent-Disposition: form-data; name="PageSize"\r\n\r\nletter\r\n------WebKitFormBoundaryD5w4WoRC6ofhOJic\r\nContent-Disposition: form-data; name="MarginTop"\r\n\r\n10\r\n------WebKitFormBoundaryD5w4WoRC6ofhOJic\r\nContent-Disposition: form-data; name="MarginRight"\r\n\r\n10\r\n------WebKitFormBoundaryD5w4WoRC6ofhOJic\r\nContent-Disposition: form-data; name="MarginBottom"\r\n\r\n10\r\n------WebKitFormBoundaryD5w4WoRC6ofhOJic\r\nContent-Disposition: form-data; name="MarginLeft"\r\n\r\n10\r\n------WebKitFormBoundaryD5w4WoRC6ofhOJic\r\nContent-Disposition: form-data; name="ParameterPreset"\r\n\r\nWide\r\n------WebKitFormBoundaryD5w4WoRC6ofhOJic--\r\n',
      method: "POST",
      mode: "cors",
    }
  );

  const body = await resp.json();

  res.redirect(body.Files[0].Url);
};
