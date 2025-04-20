## AFPN: Asymptotic Feature Pyramid Network for Object Detection  
#### 2025-04-16  

### Problem Statement  
기존의 Object Detection 모델들은 다양한 크기의 객체를 효과적으로 인식하기 위해 Feature Pyramid 구조를 사용하지만, 일반적으로 **multi-scale feature fusion**이 제한적이고 **feature 간의 정보 불균형** 문제가 발생한다. 특히, 저해상도 feature는 semantic 정보가 풍부하지만 위치 정보가 부족하고, 고해상도 feature는 위치 정보는 풍부하나 semantic 정보가 부족해 이들의 결합이 효과적으로 이루어지지 못한다.

또한 기존 방식들은 대체로 병렬적 또는 대칭적 구조로 feature를 결합하기 때문에, 상위 feature의 정보를 점진적으로 하위 feature로 효과적으로 전달하기 어려워 **정확도와 표현력에 한계**가 발생한다.

### Solution Approach  
이 문제를 해결하기 위해 AFPN은 **비대칭적(asymptotic) feature fusion 구조**를 제안한다. 구체적으로, feature를 위에서 아래 방향으로 순차적으로 전달하며 각 단계에서 semantic 정보를 강화하는 방식으로, 상위 feature의 rich한 정보를 점진적으로 하위 레벨로 주입한다. 이를 통해 scale 간 feature 표현력의 차이를 줄이고, detection 정확도를 개선한다.

### Methodology Details  
- AFPN은 기본적으로 Feature Pyramid Network(FPN) 구조를 기반으로 한다. 다만, 기존 FPN이 top-down 방식에서 모든 레벨에 대해 동일한 방식으로 정보를 전달했다면, **AFPN은 상위 feature의 정보를 단계적으로 하위 feature에 융합**하여 asymptotic하게 정보를 주입한다.
  
- 각 단계의 fusion module은 상위 feature를 downsample 하고, 하위 feature와 concatenate하여 convolution 연산을 수행한다. 이때 각 레벨에서 feature 간 semantic 간극을 줄이기 위해 attention-like 연산 또는 feature reweighting이 수행된다.

- **주요 구성 요소**  
  - **Asymptotic Fusion Path (AFP)**: feature 간 순차적 결합을 통해 semantic 정보를 누적  
  - **Re-weighting mechanism**: 각 feature 간 중요도 차이를 줄이기 위해 채널 간 강조  
  - **Lightweight design**: 계산량은 최소화하면서 표현력을 극대화

- 실험 결과, AFPN은 COCO 데이터셋에서 RetinaNet, Faster R-CNN 등 다양한 detector 백본과 결합 시 성능 향상을 보였으며, 특히 작은 객체(small objects) 검출에서 큰 개선이 있었다.

### Recap  
AFPN은 기존 Feature Pyramid 구조의 단점을 극복하기 위해 **비대칭적 피처 융합 경로**를 제안하여, 상위 semantic 정보를 하위 feature에 점진적으로 주입하는 방식으로 Object Detection의 정확도를 개선한다. 이러한 구조는 작은 객체 인식에 특히 강점을 보이며, 다양한 detector와 백본과 결합 가능한 유연성을 가진다.

---

### 한계 및 개선 가능성  
- 모델 구조는 비대칭적 특성 때문에 inference path가 길어질 수 있으며, 실시간 성능 측면에서는 최적화가 필요하다.  
- 향후 연구로는 dynamic routing이나 학습 기반 fusion 전략을 결합한 버전도 고려해볼 수 있다.