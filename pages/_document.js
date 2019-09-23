import Document, { Head, Main, NextScript } from 'next/document';
import styledNormalize from 'styled-normalize';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();
		const page = renderPage((App) => (props) => {
			return sheet.collectStyles(<app {...props} />);
		});
		const styleTags = sheet.getStyleElement();
		return {
			...page,
			styleTags
		};
	}

	render() {
		return (
			<html>
				<Head>
					<meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, maximum-scale=1,shrink-to-fit=no"
					/>
					<meta name="description" content="WizrdAmigos Codecamp will held a monthly “FREE” Boot Camp!!!" />
					<meta property="og:title" content="WizardAmigos Codecamp 2019" />
					<meta
						property="og:image"
						content="https://wizardamigos-codecamp2019.herokuapp.com/static/og_image.png"
					/>
					<meta property="og:url" content="https://wizardamigos-codecamp2019.herokuapp.com/" />
					<link rel="icon" type="image/x-icon" href="static/favicon.ico" />
					<style>
						{`
            ${styledNormalize}
            html, body{
              font-family:Helvetica Neue, Helvetica, Arial, PingFang TC, 微软雅黑, Microsoft YaHei, 华文细黑, STHeiti, sans-serif;
              box-sizing: border-box;
              font-weight: 100;
              font-size: 13px;
              color: #fff;
            }
          `}
					</style>

					{this.props.styleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
