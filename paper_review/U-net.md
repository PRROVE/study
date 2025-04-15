## U-Net: Convolutional Networks for Biomedical Image Segmentation  
#### 2025-04-15  

### Problem Statement  
- 바이오메디컬 이미지는 높은 해상도와 다양한 구조를 갖고 있어, 픽셀 단위(segmentation)의 정확한 구분이 매우 중요하다.  
- 특히 학습에 사용할 수 있는 annotated 데이터셋이 극히 제한되어 있는 상황에서, 기존의 딥러닝 기반 segmentation 모델들은 높은 성능을 내기 어렵다.  
- 기존 sliding-window 방식의 접근은 경계 정보가 손실되거나, inference 시 느리고 비효율적인 문제가 존재한다.  

### Solution Approach  
- 적은 수의 학습 이미지로도 좋은 성능을 낼 수 있는 **end-to-end 방식의 fully convolutional network**를 설계해 문제를 해결하고자 한다.  
- 입력 이미지 전체를 한 번에 처리하고, localization(정확한 위치 예측)과 context(문맥 정보)를 모두 활용할 수 있는 구조를 제안함.  
- 핵심은 대칭적 구조의 네트워크로, **contracting path** (하향 추출)와 **expansive path** (상향 복원)을 결합한 아키텍처 설계.  

### Methodology Details  
- **U-Net 구조**는 이름 그대로 "U"자 형태로, 좌측은 특징을 추출하는 contracting path, 우측은 그 특징들을 이용해 원래 크기의 segmentation map을 복원하는 expansive path로 구성된다.  
- **Contracting path**: 일반적인 CNN처럼 Convolution → ReLU → MaxPooling으로 구성되어 이미지의 context 정보를 점진적으로 압축한다.  
- **Expansive path**: Up-convolution (또는 transpose convolution)을 통해 feature map의 크기를 점점 복원하고, contracting path에서의 대응되는 feature map들과 concatenate 연산을 통해 세부 정보를 보존한다.  
- 이렇게 skip connection을 통해 하위 단계에서 추출한 localization 정보를 상위 단계의 context 정보와 통합한다.  
- 최종 출력은 원본 이미지와 동일한 해상도의 segmentation map이며, 각 픽셀에 대해 class를 예측한다.  
- 학습 시 **data augmentation** (elastic deformation 등)을 적극 활용하여 소수의 학습 이미지로도 강건한 학습이 가능하도록 함.  

### Recap  
U-Net은 소량의 바이오메디컬 이미지 데이터를 기반으로도 높은 성능을 내기 위해 설계된 Fully Convolutional Network이다.  
전체 이미지를 입력받아 픽셀 단위의 segmentation을 수행하며, contracting path로 context를 추출하고 expansive path로 localization을 복원한다.  
두 path 간의 skip connection은 정확한 경계 검출과 세부 정보 유지를 가능하게 한다.  
데이터 수가 적은 상황에서도 효과적인 성능을 보장하기 위해 다양한 augmentation 기법을 포함하고 있다.  
현재까지도 다양한 도메인에서 segmentation의 대표적인 baseline 모델로 널리 활용되고 있다.  

---

**한계 및 향후 방향**  
- 원본 U-Net은 2D 이미지에 최적화되어 있어, 3D 의료 영상 (예: CT, MRI)에는 추가적 확장이 필요하다.  
- Parameter 수가 상대적으로 많아 메모리 효율이 떨어질 수 있으며, 효율적인 변형 모델들 (e.g., U-Net++, Attention U-Net 등)이 이후 등장하였다.
