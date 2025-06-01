
import './Notes.css';
import outputImage from './output.png';

const Notes = () => {
  return (
    <div className="notes-container">
      <div className="notes-header">
        <h1>About Drowsiness Detection System</h1>
      </div>
      
      <div className="notes-content">
        <p className="notes-paragraph">
          <h1>INTRODUCING: DRIVER’S DROWSINESS DETECTION SYSTEM</h1><br/>
<h5>Existing Tools with Limitations</h5>
<br/>
Previous systems have attempted to detect drowsiness using methods like Support Vector Machines (SVMs), which classify eye states as open or closed. While effective, these models often struggle with variability in facial features, lighting conditions, and camera angles. Additionally, such systems may lack adaptability to individual driver behavior or provide limited accuracy in real-world environments.
<br/>

         <h5>Hardware and Software Requirements</h5>
         <br/>

Hardware:
PC or Laptop (minimum Intel i3 processor)
Integrated or USB camera
Minimum 4 GB RAM

Software:
Operating System: Windows, macOS, or Linux
Programming Language: Python
IDE: PyCharm
Libraries: TensorFlow, Keras, OpenCV<br/>
<br/>


<h5>Module Description</h5>
<br/>

Dataset Collection:-
We used the MRL Eye Dataset, which includes a wide variety of infrared images in different lighting conditions and devices, with and without spectacles. A large, diverse dataset is essential for training robust ML models.
<br/>

Face Detection Module:-
Images are preprocessed using OpenCV. We apply Haar Cascade classifiers (Viola-Jones Algorithm) to detect faces. Only the face region is passed to the classification model to avoid noise from the background.



<br/>
Classification Module:-
We implemented a Convolutional Neural Network (CNN) model to classify the driver’s eye state as “drowsy” or “alert.” The model is trained on labeled image data using supervised learning, with 80% used for training and 20% for testing.

<br/>

Model Training
Epochs: 5
Validation Split: 10% of training data
Performance is monitored using accuracy, precision, and recall.
Checkpoints are saved when performance improves.

Evaluation and Testing
The model is evaluated on unseen test data using key metrics (loss, accuracy, precision, recall). Graphs for training and validation accuracy are plotted using Matplotlib to visualize performance.
<br/>


<h5>Program Workflow</h5>


1. Capture real-time video feed from the camera.<br/>

2. Detect and isolate the facial region.<br/>

3. Classify eye state using CNN.<br/>

4. Generate an audio alert if drowsiness is detected.<br/>


<h5>PROJECT OUTCOME AND APPLICABILITY</h5>
<br/>

  <img src={outputImage} alt="output" />

<br/>

Achieved an accuracy of 96.42% in drowsiness classification.

Successfully detected drowsiness and generated alerts in real-time.

Face and eye detection performed reliably using Haar classifiers.



        </p>
        
        
      </div>
    </div>
  );
};

export default Notes;