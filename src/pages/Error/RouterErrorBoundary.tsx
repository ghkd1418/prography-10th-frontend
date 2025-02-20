import { useRouteError } from 'react-router';

export function RouterErrorBoundary() {
	let error = useRouteError() as Error;
	return (
		<div>
			<h1>에러가 발생했어요! 😩</h1>
			<pre>{error.message || JSON.stringify(error)}</pre>
			<button onClick={() => (window.location.href = '/')}>홈으로</button>
		</div>
	);
}
