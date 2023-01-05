# 자바스크립트 알고리즘 문제풀이 입문(코딩테스트 대비)

## sec 0. 강의자료 및 강의소개

일단은 여기 100문제 다 풀자

문제당 스스로 20분 정도 스스로 도전!

## sec 1. 기본문제 풀이

## sec 2. 1, 2차원 배열 탐색

## sec 3. 문자열 탐색

## sec 4. 완전탐색(블루투포스)

### 1. 자리수의 합

내가 놓친 부분 :

각 자리의 합을 구해서 array를 만들어주고, 인덱스를 찾아서 리턴을 해주었지만, 같은 값이 있을수 있기에 한번 더 비교를 해줘야 하는데 이부분을 놓쳣다.

오리지널 arr과 임시로만든 arr 비교를 하면서, 그 중에 똑같은게 있으면 answer를 바꿔주는 곳에서 해결을 스스로 못함.

### 2. 뒤집은 소수

소수 구하는 함수를 만들고, forEach를 통해, element를 돌려서 확인

## sec 5. 효율성(투포인터 알고리즘, 슬라이딩윈도우, 해쉬)

## sec 6. 자료구조(스택, 큐)

## sec 7. 정렬과 그리디, 결정알고리즘(이분검색)

## sec 8. 재귀함수와 완전탐색(DFS:깊이우선탐색)

### 1. 재귀함수(Recursion)

자기가 자기 자신을 부르는 함수를 제귀함수라고함.

#### 2. 재귀함수를 이용한 이진수 출력

#### 3. 이진트리순회(DFS: 깊이우선탐색) binary tree

---

              1
      2               3

4 5 6 7

전위순회(Preorder Traversal) : 1 2 4 5 3 6 7 (부 -> 왼 -> 오)
중위순회(Inorder Traversal) : 4 2 5 1 6 3 7 (왼 -> 부 -> 오, 1이 먼저 나오는 이유는 왼쪽 자식 트리가 다 됬기 때문에)
후위순회(Postorder Traversal) : 4 5 2 6 7 3 1 (왼 -> 오 -> 부)

## sec 9. 그래프와 탐색(DFS, BFS:넓이우선탐색)

## sec 10. Dynamic programming(동적계획법)