## An Introduction to Convolutional Neural Networks
#### 2025-04-21

### Problem Statement
- 전통적인 완전연결신경망 (Fully Connected Neural Network, FCNN)은 이미지와 같이 고차원 입력 데이터를 처리할 때 학습 파라미터 수가 기하급수적으로 증가하여 계산 자원이 과도하게 소모된다.
- 이미지의 공간 정보를 무시한 채 벡터 형태로만 처리되기 때문에 위치와 구조적 정보 손실이 발생한다.
- 이러한 한계는 이미지 분류, 객체 탐지, 시맨틱 분할 등의 시각적 작업에서 성능 저하로 이어진다.

### Solution Approach
- **Convolutional Neural Networks (CNN)**는 이미지의 공간 구조를 보존하면서도 효율적으로 특징을 추출할 수 있도록 설계된 딥러닝 모델이다.
- 국소적인 **convolution 연산**을 통해 이미지의 국지적 특징을 포착하며, **weight sharing** 메커니즘을 통해 파라미터 수를 크게 줄인다.
- **Pooling**을 통해 특징맵을 압축하면서도 중요한 정보는 유지하여 계산량을 줄이고, 과적합을 방지한다.

### Methodology Details
- **Convolution Layer**: 입력 이미지에 필터(커널)를 슬라이딩하며 곱셈 및 합산을 통해 특징 맵(feature map)을 생성한다. 이는 엣지, 코너, 텍스처 등 저수준 패턴을 추출한다.
- **Activation Function**: 비선형성을 부여하기 위해 일반적으로 ReLU(Rectified Linear Unit)를 사용하여 학습 가능성을 높인다.
- **Pooling Layer**: 보통 Max Pooling 또는 Average Pooling을 사용하여 공간 해상도를 줄이고 중요한 특징만 남긴다. 위치는 일부 손실되지만 특징의 존재 유무는 유지된다.
- **Repeated Blocks**: Convolution + Activation + Pooling 조합은 여러 번 반복되어 점차 고수준의 의미 있는 특징을 학습하게 된다.
- **Flatten Layer**: 마지막 convolution/pooling 블록의 출력(다차원 텐서)을 일차원 벡터로 변환한다.
- **Fully Connected Layer (Dense Layer)**: Flatten된 벡터를 통해 최종 분류 혹은 회귀 등의 작업을 수행한다.
- **Output Layer**: 보통 Softmax 또는 Sigmoid를 이용해 최종 확률 출력을 제공한다.

> 일반적인 CNN 구조 흐름:  
> **Input Image → [Convolution → Activation → Pooling] × N → Flatten → Dense → Output (e.g., Softmax)**

### Recap
Convolutional Neural Networks는 고차원 이미지 데이터를 효율적으로 처리하기 위해 설계된 딥러닝 모델로, **local receptive field**, **weight sharing**, **pooling**을 기반으로 공간적 구조를 유지하면서도 학습 파라미터를 줄이는 데 효과적이다.  
입력 이미지는 convolution 연산을 통해 저수준에서 고수준까지의 특징을 추출하며, 마지막 단계에서는 전통적인 완전 연결층을 통해 결과를 도출한다.  
이미지 분류, 물체 인식, 이미지 분할 등 다양한 컴퓨터 비전 문제에서 성능 향상을 이끌어낸 핵심 모델이다.

### 한계 또는 확장 가능성
- CNN은 고정된 크기의 입력을 요구하며, 시퀀스나 그래프 형태의 데이터에는 부적합하다.
- Transformer 계열 구조와 결합되거나, attention 메커니즘이 도입되면서 CNN의 성능 한계를 보완하려는 연구도 활발히 진행되고 있다.