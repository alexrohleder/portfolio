export default async (req, res) => {
  const pdfConvertionResp = await fetch(
    "https://www.web2pdfconvert.com/convert/web/to/pdf?storefile=true&filename=alexrohleder-com",
    {
      headers: {
        "content-type": `multipart/form-data; boundary=----WebKitFormBoundaryVSqA5YPRgIE4GTR1`,
      },
      referrer: "https://www.web2pdfconvert.com/",
      body:
        '------WebKitFormBoundaryVSqA5YPRgIE4GTR1\r\nContent-Disposition: form-data; name="url"\r\n\r\nhttp://alexrohleder.com\r\n------WebKitFormBoundaryVSqA5YPRgIE4GTR1\r\nContent-Disposition: form-data; name="pricing"\r\n\r\nmonthly\r\n------WebKitFormBoundaryVSqA5YPRgIE4GTR1\r\nContent-Disposition: form-data; name="ConversionDelay"\r\n\r\n0\r\n------WebKitFormBoundaryVSqA5YPRgIE4GTR1\r\nContent-Disposition: form-data; name="CookieConsentBlock"\r\n\r\ntrue\r\n------WebKitFormBoundaryVSqA5YPRgIE4GTR1\r\nContent-Disposition: form-data; name="Zoom"\r\n\r\n1\r\n------WebKitFormBoundaryVSqA5YPRgIE4GTR1\r\nContent-Disposition: form-data; name="FixedElements"\r\n\r\nabsolute\r\n------WebKitFormBoundaryVSqA5YPRgIE4GTR1\r\nContent-Disposition: form-data; name="ViewportWidth"\r\n\r\n800\r\n------WebKitFormBoundaryVSqA5YPRgIE4GTR1\r\nContent-Disposition: form-data; name="ViewportHeight"\r\n\r\n800\r\n------WebKitFormBoundaryVSqA5YPRgIE4GTR1\r\nContent-Disposition: form-data; name="PageOrientation"\r\n\r\nportrait\r\n------WebKitFormBoundaryVSqA5YPRgIE4GTR1\r\nContent-Disposition: form-data; name="PageRange"\r\n\r\n1-20\r\n------WebKitFormBoundaryVSqA5YPRgIE4GTR1\r\nContent-Disposition: form-data; name="PageSize"\r\n\r\na4\r\n------WebKitFormBoundaryVSqA5YPRgIE4GTR1\r\nContent-Disposition: form-data; name="MarginTop"\r\n\r\n0\r\n------WebKitFormBoundaryVSqA5YPRgIE4GTR1\r\nContent-Disposition: form-data; name="MarginRight"\r\n\r\n0\r\n------WebKitFormBoundaryVSqA5YPRgIE4GTR1\r\nContent-Disposition: form-data; name="MarginBottom"\r\n\r\n0\r\n------WebKitFormBoundaryVSqA5YPRgIE4GTR1\r\nContent-Disposition: form-data; name="MarginLeft"\r\n\r\n0\r\n------WebKitFormBoundaryVSqA5YPRgIE4GTR1\r\nContent-Disposition: form-data; name="ParameterPreset"\r\n\r\nCustom\r\n------WebKitFormBoundaryVSqA5YPRgIE4GTR1--\r\n',
      method: "POST",
      mode: "cors",
    }
  );

  try {
    const pdfConvertionBody = await pdfConvertionResp.json();
    const downloadUrl = pdfConvertionBody.Files[0].Url;
    res.redirect(downloadUrl);
  } catch (error) {
    res.end(502);
    console.error(error);
  }
};
