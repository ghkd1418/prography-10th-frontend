import { Link } from 'react-router';

import * as styles from './Home.css';

const Home = () => {
	return (
		<div className={styles.container}>
			<img
				src="/images/logo.png"
				alt="프로그라피 로고"
				className={styles.logo}
			/>
			<h1 className={styles.title}>
				안녕하세요. 새로운 가치를 만들어가는 IT 커뮤니티,
				<b className={styles.name}>Prography</b> 입니다.
			</h1>
			<p className={styles.highlight}>
				드디어 Prography 10기 모집이 시작되었습니다.
			</p>
			<p className={styles.description}>
				Product Owner / Design / iOS / AOS / Frontend(React) / Backend(Spring)
				<br />총 6개의 파트를 모집합니다.
			</p>
			<ul className={styles.list}>
				<li>✔️ 새로운 가치를 만들어내는데 가슴이 두근거리신다면,</li>
				<li>✔️ 열정적인 IT인들과 함께 사이드 프로젝트를 하고 싶으시다면,</li>
				<li>✔️ 탁월한 동료들과 짜릿한 성취감을 느껴보고 싶으시다면,</li>
			</ul>
			<div>
				<p className={styles.quote}>"프로답게, 재미있게"</p>
				<p className={styles.description}>
					재미있는 작당을 함께 만들어갈 10기에 합류하세요.
				</p>
			</div>
			<p>
				📌 자세한 정보는 아래 페이지에 담아뒀으니, 지원 전 꼭 확인해주세요👇
			</p>
			<div className={styles.links}>
				<a href="https://prography.org/">
					프로그래피 10기 모집 자세히 알아보기
				</a>
				<a href="https://prography.org/">🏡 공식 홈페이지</a>
				<a href="https://www.instagram.com/prography_official/">
					🔗 인스타그램
				</a>
			</div>
			<Link to="/apply" className={styles.applyButton}>
				지원하기
			</Link>
		</div>
	);
};
export default Home;
