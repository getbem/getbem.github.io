const googleAnalitycs = "<script type='text/javascript'>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-15345174-10', 'auto');ga('send', 'pageview');</script>";
const gauges = "<script type='text/javascript'>var _gauges = _gauges || [];(function() {var t = document.createElement('script'); t.type  = 'text/javascript'; t.async = true; t.id    = 'gauges-tracker'; t.setAttribute('data-site-id', '54070a998bfdf7145100b613'); t.setAttribute('data-track-path', 'https://track.gaug.es/track.gif'); t.src = 'https://track.gaug.es/track.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(t, s); })();</script>";

export default () => (
	<div innerHTML={googleAnalitycs+gauges}></div>
);
