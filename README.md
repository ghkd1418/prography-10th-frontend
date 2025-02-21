# prography-10th-frontend 사전 과제 

## 실행 방법
```
yarn
yarn dev
```

## 구현 스펙
1. 리쿠르팅 **진행단계**를 표시합니다.
 <img width="412" alt="스크린샷 2025-02-21 오전 11 40 18" src="https://github.com/user-attachments/assets/d02c1d93-a372-46c8-800c-d977a5d8db4d" />

2. 제출하기 버튼을 누르기 전까지 리크루팅  **폼 데이터가 유지**되어야 합니다.
- useFunnel hook을 통해 내부에서 useState로 리크루팅 폼 데이터 유지

3. 필수 입력 항목이 있으며, 필수 항목을 입력하기 전까지는 다음 단계로 넘어갈 수 없어야 합니다.
- react-hook-form의 required 옵션을 사용하여 필수 입력 항목을 지정, 에러를 표시하여 다음 단계로 넘어갈 수 없도록 구현

4. 다음 단계로 넘어갈 경우, 필수 입력 항목이 누락되었을 때 **경고 표시 및 알림**이 제공되어야 합니다.
  <img width="728" alt="스크린샷 2025-02-21 오전 11 45 17" src="https://github.com/user-attachments/assets/00c491a2-e5d9-4f4f-9b16-9a14a6bc6454" />

5. 특정항목에 대한 **예시 데이터**를 표시해야 합니다.
  <img width="645" alt="스크린샷 2025-02-21 오전 11 44 44" src="https://github.com/user-attachments/assets/9d01591f-c971-42ad-94e7-dbccbcb42cea" />

6. API통신을 위한 리쿠르팅 **폼 데이터** 구성해야 합니다.
-  `handlepostApi`에서 API통신 위한 리쿠르팅 폼 데이터 구성

7. 이 외에도 UI/UX적으로 필요한 기능이 있다면 **자유롭게 추가**해 주세요.
   - 전역 에러 바운더리 / NotFound 페이지
   - 반응형 

---

 ### use-funnel
 최초 toss의 use-funnel을 사용해 구현하려고 했지만, 아직 patch 버전이고 해당 프로젝트에서 리쿠르팅 단계를 표시하기 위해 사용하기에는 사용하지 않는 기능이 많고 복잡하다고 생각되어, 간단한 use-funnel을 구현하여 사용하였습니다.
