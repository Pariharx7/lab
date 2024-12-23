```
 print(friends)
 plot(friends$marks, xlab="Names",ylab="Marks", main="Student Record")
 barplot(friends$marks, xlab="Names",ylab="Marks", main="Student Rec  ord", names.arg=friends$names,col="black")
 pie(friends$marks, labels=friends$names,main="Student Record")


```

```
study_hours <- c(2,4,6,8,10)
 exam_scores <- c(50,55,60,70,85)
covariance <- cov(study_hours, exam_scores)
 
 correlation_coefficient <- cor(study_hours, exam_scores)
covariance
correlation_coefficient


```

```
s1 = {1, 2, 3, 4, 5}
s2 = {4, 5, 6, 7, 8}
print("Union of sets: ", s1.union(s2))
print("Intersection of sets: ", s1.intersection(s2))
print("Symmetric Difference: ", s1.symmetric_difference(s2))
print("Are sets disjoint: ", s1.isdisjoint(s2)) 


```

```
n1 = 0
n2 = 1
n = int(input("Enter length of fibonacci series: "))
for i in range(0, n):
    print(n1, end=" ")
    next = n1 + n2
    n1 = n2
    n2 = next

```
```
!pip install tensorflow
import tensorflow as tf
!pip install keras
from tensorflow import keras
!pip install matplotlib
import matplotlib.pyplot as plt
import numpy as np
!pip install opencv-python
import cv2
img = cv2.imread("mlx.jpg")
print(img)
plt.imshow(img)

from tensorflow.keras import layers
from tensorflow.keras.layers import Conv2D
newImg=Conv2D(filters=3,strides=(1,1),kernel_size=(3,3),padding="same",use_bias=False)
print(img.dtype)
print(img.shape)
img=tf.cast(img,tf.float32)/255
kernel=np.array([[0,-1,0],[-1,4,-1],[0,-1,0]],dtype=np.float32)
print(kernel.dtype)
img=np.expand_dims(img,axis=0)
print(img.shape)
print(kernel.shape)
kernel = kernel[:,:,np.newaxis,np.newaxis]
print(kernel.shape)
kernel = np.repeat(kernel,repeats=3,axis=2)
kernel=np.repeat(kernel,repeats=3,axis=3)
print(kernel.shape)
newImg.build(input_shape=img.shape)
newImg.set_weights([kernel])
output=newImg(img)[0]
plt.imshow(output)

```