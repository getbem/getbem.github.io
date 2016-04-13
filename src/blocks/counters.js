const googleAnalitycs = `
<!-- Google Analytics -->
<script>
window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', 'UA-15345174-10', 'auto');
ga('send', 'pageview');
</script>
<script async src='//www.google-analytics.com/analytics.js'></script>
<!-- End Google Analytics -->`;
const gauges = '<script type=\'text/javascript\'>var _gauges = _gauges || [];(function() {var t = document.createElement(\'script\'); t.type  = \'text/javascript\'; t.async = true; t.id    = \'gauges-tracker\'; t.setAttribute(\'data-site-id\', \'54070a998bfdf7145100b613\'); t.setAttribute(\'data-track-path\', \'https://track.gaug.es/track.gif\'); t.src = \'https://track.gaug.es/track.js\'; var s = document.getElementsByTagName(\'script\')[0]; s.parentNode.insertBefore(t, s); })();</script>';

export default () => (
	<div innerHTML={googleAnalitycs + gauges}></div>
);
