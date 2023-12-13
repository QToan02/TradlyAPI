export const confirmEmailTemplate = (
  name: string,
  confirmLink: string
) => `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  lang="en"
>
  <head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta name="x-apple-disable-message-reformatting" content="" />
    <meta content="target-densitydpi=device-dpi" name="viewport" />
    <meta content="true" name="HandheldFriendly" />
    <meta content="width=device-width" name="viewport" />
    <meta
      name="format-detection"
      content="telephone=no, date=no, address=no, email=no, url=no"
    />
    <style type="text/css">
      table {
        border-collapse: separate;
        table-layout: fixed;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      table td {
        border-collapse: collapse;
      }
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
      body,
      a,
      li,
      p,
      h1,
      h2,
      h3 {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
      html {
        -webkit-text-size-adjust: none !important;
      }
      body,
      #innerTable {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      #innerTable img + div {
        display: none;
        display: none !important;
      }
      img {
        margin: 0;
        padding: 0;
        -ms-interpolation-mode: bicubic;
      }
      h1,
      h2,
      h3,
      p,
      a {
        line-height: 1;
        overflow-wrap: normal;
        white-space: normal;
        word-break: break-word;
      }
      a {
        text-decoration: none;
      }
      h1,
      h2,
      h3,
      p {
        min-width: 100% !important;
        width: 100% !important;
        max-width: 100% !important;
        display: inline-block !important;
        border: 0;
        padding: 0;
        margin: 0;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      a[href^="mailto"],
      a[href^="tel"],
      a[href^="sms"] {
        color: inherit;
        text-decoration: none;
      }
    </style>
    <style type="text/css">
      @media (min-width: 481px) {
        .hd {
          display: none !important;
        }
      }
    </style>
    <style type="text/css">
      @media (max-width: 480px) {
        .hm {
          display: none !important;
        }
      }
    </style>
    <style type="text/css">
      [style*="Inter Tight"] {
        font-family: "Inter Tight", BlinkMacSystemFont, Segoe UI, Helvetica Neue,
          Arial, sans-serif !important;
      }
      [style*="Albert Sans"] {
        font-family: "Albert Sans", BlinkMacSystemFont, Segoe UI, Helvetica Neue,
          Arial, sans-serif !important;
      }
      @media only screen and (min-width: 481px) {
        .t20 {
          width: 720px !important;
        }
        .t27 {
          padding: 40px 60px 50px !important;
        }
        .t29 {
          padding: 40px 30px 50px !important;
          width: 680px !important;
        }
        .t43 {
          width: 600px !important;
        }
        .t53,
        .t61 {
          width: 580px !important;
        }
        .t65 {
          width: 600px !important;
        }
        .t79 {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        .t81 {
          padding-left: 0 !important;
          padding-right: 0 !important;
          width: 400px !important;
        }
        .t85,
        .t95 {
          width: 600px !important;
        }
      }
    </style>
    <style type="text/css" media="screen and (min-width:481px)">
      .moz-text-html .t20 {
        width: 720px !important;
      }
      .moz-text-html .t27 {
        padding: 40px 60px 50px !important;
      }
      .moz-text-html .t29 {
        padding: 40px 60px 50px !important;
        width: 680px !important;
      }
      .moz-text-html .t43 {
        width: 600px !important;
      }
      .moz-text-html .t53,
      .moz-text-html .t61 {
        width: 580px !important;
      }
      .moz-text-html .t65 {
        width: 600px !important;
      }
      .moz-text-html .t79 {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .moz-text-html .t81 {
        padding-left: 0 !important;
        padding-right: 0 !important;
        width: 400px !important;
      }
      .moz-text-html .t85,
      .moz-text-html .t95 {
        width: 600px !important;
      }
    </style>
    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;600;700&amp;family=Albert+Sans:wght@800&amp;display=swap"
      rel="stylesheet"
      type="text/css"
    />
    <!--<![endif]-->
    <!--[if mso]>
      <style type="text/css">
        td.t20 {
          width: 800px !important;
        }
        td.t27 {
          padding: 40px 60px 50px !important;
        }
        td.t29 {
          padding: 40px 60px 50px !important;
          width: 800px !important;
        }
        td.t43,
        td.t53 {
          width: 600px !important;
        }
        td.t61 {
          width: 580px !important;
        }
        td.t65 {
          width: 600px !important;
        }
        td.t79,
        td.t81 {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        td.t85,
        td.t95 {
          width: 600px !important;
        }
      </style>
    <![endif]-->
    <!--[if mso]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
  </head>
  <body
    class="t0"
    style="
      min-width: 100%;
      margin: 0px;
      padding: 0px;
      background-color: #000000;
    "
  >
    <div class="t1" style="background-color: #000000">
      <table
        role="presentation"
        width="100%"
        cellpadding="0"
        cellspacing="0"
        border="0"
        align="center"
      >
        <tr>
          <td
            class="t2"
            style="
              font-size: 0;
              line-height: 0;
              mso-line-height-rule: exactly;
              background-color: #000000;
            "
            valign="top"
            align="center"
          >
            <!--[if mso]>
              <v:background
                xmlns:v="urn:schemas-microsoft-com:vml"
                fill="true"
                stroke="false"
              >
                <v:fill color="#000000" />
              </v:background>
            <![endif]-->
            <table
              role="presentation"
              width="100%"
              cellpadding="0"
              cellspacing="0"
              border="0"
              align="center"
              id="innerTable"
            >
              <tr>
                <td>
                  <table
                    class="t119"
                    role="presentation"
                    cellpadding="0"
                    cellspacing="0"
                    align="center"
                  >
                    <tr>
                      <!--[if !mso]><!-->
                      <td
                        class="t120"
                        style="width: 320px; padding: 40px 40px 40px 40px"
                      >
                        <!--<![endif]-->
                        <!--[if mso]><td class="t120" style="width:400px;padding:40px 40px 40px 40px;"><![endif]-->
                        <table
                          role="presentation"
                          width="100%"
                          cellpadding="0"
                          cellspacing="0"
                        ></table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table
                    class="t10"
                    role="presentation"
                    cellpadding="0"
                    cellspacing="0"
                    align="center"
                  >
                    <tr>
                      <!--[if !mso]><!-->
                      <td
                        class="t11"
                        style="background-color: #ffffff; width: 400px"
                      >
                        <!--<![endif]-->
                        <!--[if mso]><td class="t11" style="background-color:#FFFFFF;width:400px;"><![endif]-->
                        <table
                          role="presentation"
                          width="100%"
                          cellpadding="0"
                          cellspacing="0"
                        >
                          <tr>
                            <td>
                              <table
                                class="t19"
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                align="center"
                              >
                                <tr>
                                  <!--[if !mso]><!-->
                                  <td
                                    class="t20"
                                    style="
                                      background-color: #33907c;
                                      width: 400px;
                                      padding: 40px 40px 40px 40px;
                                    "
                                  >
                                    <!--<![endif]-->
                                    <!--[if mso]><td class="t20" style="background-color:#33907c;width:480px;padding:40px 40px 40px 40px;"><![endif]-->
                                    <table
                                      role="presentation"
                                      width="100%"
                                      cellpadding="0"
                                      cellspacing="0"
                                    >
                                      <tr>
                                        <td>
                                          <table
                                            class="t104"
                                            role="presentation"
                                            cellpadding="0"
                                            cellspacing="0"
                                            align="center"
                                          >
                                            <tr>
                                              <!--[if !mso]><!-->
                                              <td
                                                class="t105"
                                                style="width: 200px"
                                              >
                                                <!--<![endif]-->
                                                <!--[if mso]><td class="t105" style="width:200px;"><![endif]-->
                                                <div style="font-size: 0px">
                                                <img
                                                class="t130"
                                                style="
                                                  display: block;
                                                  border: 0;
                                                  height: auto;
                                                  width: 100%;
                                                  margin: 0;
                                                  max-width: 100%;
                                                "
                                                width="55"
                                                height="36.4375"
                                                alt=""
                                                src="cid:unique@nodemailer.com"
                                              />
                                                </div>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <table
                                class="t28"
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                align="center"
                              >
                                <tr>
                                  <!--[if !mso]><!-->
                                  <td
                                    class="t29"
                                    style="
                                      width: 420px;
                                      padding: 30px 30px 40px 30px;
                                    "
                                  >
                                    <!--<![endif]-->
                                    <!--[if mso]><td class="t29" style="width:480px;padding:30px 30px 40px 30px;"><![endif]-->
                                    <table
                                      role="presentation"
                                      width="100%"
                                      cellpadding="0"
                                      cellspacing="0"
                                    >
                                      <tr>
                                        <td>
                                          <table
                                            class="t42"
                                            role="presentation"
                                            cellpadding="0"
                                            cellspacing="0"
                                            align="center"
                                          >
                                            <tr>
                                              <!--[if !mso]><!-->
                                              <td
                                                class="t43"
                                                style="width: 480px"
                                              >
                                                <!--<![endif]-->
                                                <!--[if mso]><td class="t43" style="width:480px;"><![endif]-->
                                                <h1
                                                  class="t49"
                                                  style="
                                                    margin: 0;
                                                    margin: 0;
                                                    font-family: BlinkMacSystemFont,
                                                      Segoe UI, Helvetica Neue,
                                                      Arial, sans-serif,
                                                      'Albert Sans';
                                                    line-height: 35px;
                                                    font-weight: 800;
                                                    font-style: normal;
                                                    font-size: 30px;
                                                    text-decoration: none;
                                                    text-transform: none;
                                                    letter-spacing: -1.2px;
                                                    direction: ltr;
                                                    color: #333333;
                                                    text-align: center;
                                                    mso-line-height-rule: exactly;
                                                    mso-text-raise: 2px;
                                                  "
                                                >
                                                  Hi ${name}, thank you for your
                                                  registration
                                                </h1>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div
                                            class="t41"
                                            style="
                                              mso-line-height-rule: exactly;
                                              mso-line-height-alt: 16px;
                                              line-height: 16px;
                                              font-size: 1px;
                                              display: block;
                                            "
                                          >
                                            &nbsp;
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <p
                                            class="t39"
                                            style="
                                              margin: 0;
                                              margin: 0;
                                              font-family: BlinkMacSystemFont,
                                                Segoe UI, Helvetica Neue, Arial,
                                                sans-serif, 'Inter Tight';
                                              line-height: 21px;
                                              font-weight: 400;
                                              font-style: normal;
                                              font-size: 14px;
                                              text-decoration: none;
                                              text-transform: none;
                                              direction: ltr;
                                              color: #555555;
                                              text-align: center;
                                              mso-line-height-rule: exactly;
                                              mso-text-raise: 2px;
                                            "
                                          >
                                            This email is to confirm that we
                                            have received your registration
                                            information and to verify the email
                                            address you have provided.
                                            <br />
                                            <i
                                              >To complete your registration,
                                              please click the link below
                                            </i>
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div
                                            class="t31"
                                            style="
                                              mso-line-height-rule: exactly;
                                              mso-line-height-alt: 30px;
                                              line-height: 30px;
                                              font-size: 1px;
                                              display: block;
                                            "
                                          >
                                            &nbsp;
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <table
                                            class="t52"
                                            role="presentation"
                                            cellpadding="0"
                                            cellspacing="0"
                                            align="center"
                                          >
                                            <tr>
                                              <!--[if !mso]><!-->
                                              <td
                                                class="t53"
                                                style="
                                                  background-color: #33907c;
                                                  overflow: hidden;
                                                  width: 460px;
                                                  text-align: center;
                                                  line-height: 24px;
                                                  mso-line-height-rule: exactly;
                                                  mso-text-raise: 2px;
                                                  padding: 10px 10px 10px 10px;
                                                  border-radius: 10px 10px 10px
                                                    10px;
                                                "
                                              >
                                                <!--<![endif]-->
                                                <!--[if mso]><td class="t53" style="background-color:#33907c;overflow:hidden;width:480px;text-align:center;line-height:24px;mso-line-height-rule:exactly;mso-text-raise:2px;padding:10px 10px 10px 10px;border-radius:10px 10px 10px 10px;"><![endif]-->
                                                <a
                                                  href="${confirmLink}"
                                                  class="t59"
                                                  style="
                                                    cursor: pointer;
                                                    display: block;
                                                    margin: 0;
                                                    margin: 0;
                                                    font-family: BlinkMacSystemFont,
                                                      Segoe UI, Helvetica Neue,
                                                      Arial, sans-serif,
                                                      'Inter Tight';
                                                    line-height: 24px;
                                                    font-weight: 600;
                                                    font-style: normal;
                                                    font-size: 16px;
                                                    text-decoration: none;
                                                    direction: ltr;
                                                    color: #ffffff;
                                                    text-align: center;
                                                    mso-line-height-rule: exactly;
                                                    mso-text-raise: 2px;
                                                  "
                                                  >Complete your registration</a
                                                >
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div
                                            class="t62"
                                            style="
                                              mso-line-height-rule: exactly;
                                              mso-line-height-alt: 12px;
                                              line-height: 12px;
                                              font-size: 1px;
                                              display: block;
                                            "
                                          >
                                            &nbsp;
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <table
                                            class="t64"
                                            role="presentation"
                                            cellpadding="0"
                                            cellspacing="0"
                                            align="center"
                                          >
                                            <tr>
                                              <!--[if !mso]><!-->
                                              <td
                                                class="t65"
                                                style="width: 480px"
                                              >
                                                <!--<![endif]-->
                                                <!--[if mso]><td class="t65" style="width:480px;"><![endif]-->
                                                <p
                                                  class="t71"
                                                  style="
                                                    margin: 0;
                                                    margin: 0;
                                                    font-family: BlinkMacSystemFont,
                                                      Segoe UI, Helvetica Neue,
                                                      Arial, sans-serif,
                                                      'Inter Tight';
                                                    line-height: 21px;
                                                    font-weight: 400;
                                                    font-style: normal;
                                                    font-size: 14px;
                                                    text-decoration: none;
                                                    text-transform: none;
                                                    direction: ltr;
                                                    color: #555555;
                                                    text-align: center;
                                                    mso-line-height-rule: exactly;
                                                    mso-text-raise: 2px;
                                                  "
                                                >
                                                  or <a
                                                    class="t72"
                                                    href="#"
                                                    style="
                                                      margin: 0;
                                                      margin: 0;
                                                      font-weight: 700;
                                                      font-style: normal;
                                                      text-decoration: none;
                                                      direction: ltr;
                                                      color: #000000;
                                                      mso-line-height-rule: exactly;
                                                    "
                                                    target="_blank"
                                                    >log in</a
                                                  > to your account
                                                </p>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <div
                    class="t4"
                    style="
                      mso-line-height-rule: exactly;
                      mso-line-height-alt: 30px;
                      line-height: 30px;
                      font-size: 1px;
                      display: block;
                    "
                  >
                    &nbsp;
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <table
                    class="t80"
                    role="presentation"
                    cellpadding="0"
                    cellspacing="0"
                    align="center"
                  >
                    <tr>
                      <!--[if !mso]><!-->
                      <td
                        class="t81"
                        style="width: 320px; padding: 0 40px 0 40px"
                      >
                        <!--<![endif]-->
                        <!--[if mso]><td class="t81" style="width:400px;padding:0 40px 0 40px;"><![endif]-->
                        <table
                          role="presentation"
                          width="100%"
                          cellpadding="0"
                          cellspacing="0"
                        >
                          <tr>
                            <td>
                              <table
                                class="t94"
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                align="center"
                              ></table>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div
                                class="t82"
                                style="
                                  mso-line-height-rule: exactly;
                                  mso-line-height-alt: 8px;
                                  line-height: 8px;
                                  font-size: 1px;
                                  display: block;
                                "
                              >
                                &nbsp;
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <div
                    class="t74"
                    style="
                      mso-line-height-rule: exactly;
                      mso-line-height-alt: 100px;
                      line-height: 100px;
                      font-size: 1px;
                      display: block;
                    "
                  >
                    &nbsp;
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
`
