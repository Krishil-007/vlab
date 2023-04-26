var form = document.querySelector('#quiz-form');
var submitButton = document.querySelector('#submit');
var questions = document.querySelectorAll('.question');
var sample_que = 5;

var que_data = {
  1: {
    "Q" : "Who formulated Bragg's Law?",
    "A" : "William Lawrence Bragg",
    "B" : "Max von Laue",
    "C" : "James Franck",
    "D" : "Albert Einstein",
    "ans" : "A",
  },
  2: {
      "Q" : "What is Bragg's Law?",
      "A" : "It describes the reflection of light from a smooth surface.",
      "B" : "It describes the diffraction of light through a single slit.",
      "C" : "It describes the diffraction of X-rays by crystals.",
      "D" : " It describes the interference of light waves in a double-slit experiment",
      "ans" : "C",
    },
    3: {
      "Q" : "What is the mathematical expression for Bragg's Law?",
      "A" : "n&#955; = d sin &#920;",
      "B" : "&#955; = 2d sin &#920;",
      "C" : "n&#955; = 2d sin &#920;",
      "D" : "&#955; = d sin &#920;",
      "ans" : "B",
    },
    4: {
      "Q" : "What does 'n' represent in Bragg's Law?",
      "A" : "The wavelength of the incident X-rays.",
      "B" : "The order of the diffraction peak.",
      "C" : "The distance between crystal planes.",
      "D" : "The angle of incidence.",
      "ans" : "B",
    },
    5: {
      "Q" : "What does '&#955;' represent in Bragg's Law?",
      "A" : "The order of the diffraction peak.",
      "B" : "The distance between crystal planes.",
      "C" : "The wavelength of the incident X-rays.",
      "D" : "The angle of incidence.",
      "ans" : "C",
    },
    6: {
      "Q" : "What does 'd' represent in Bragg's Law?",
      "A" : "The order of the diffraction peak.",
      "B" : "The angle of incidence.",
      "C" : "The distance between crystal planes.",
      "D" : "The wavelength of the incident X-rays.",
      "ans" : "C",
    },
    7: {
      "Q" : "What does '&#920;' represent in Bragg's Law?",
      "A" : "The order of the diffraction peak.",
      "B" : "The angle of incidence.",
      "C" : "The distance between crystal planes.",
      "D" : "The wavelength of the incident X-rays.",
      "ans" : "B",
    },
    8: {
      "Q" : "What is the unit of 'd' in Bragg's Law?",
      "A" : "Meters",
      "B" : "Angstroms",
      "C" : "Nanometers",
      "D" : "Picometers",
      "ans" : "B",
    },
    9: {
      "Q" : "What is the significance of Bragg's Law?",
      "A" : "It explains the photoelectric effect.",
      "B" : "It explains the Compton effect.",
      "C" : "It explains the diffraction of X-rays by crystals.",
      "D" : "It explains the interference of light waves in a double-slit experiment.",
      "ans" : "C",
    },
    10: {
      "Q" : "Which of the following is required for the application of Bragg's Law?",
      "A" : "A single Crystal",
      "B" : "A polycrystalline material",
      "C" : "A smooth surface",
      "D" : "A light source",
      "ans" : "A",
    },
    11: {
      "Q" : "What is the relationship between the angle of incidence and the angle of diffraction in Bragg's Law?",
      "A" : "They are equal.",
      "B" : "They are inversely proportional.",
      "C" : "They are directly proportional.",
      "D" : "There is no relationship between them.",
      "ans" : "A",
    },
    12: {
      "Q" : "What is the condition for constructive interference in Bragg's Law?",
      "A" : "n&#955; = 2dsin&#920;",
      "B" : "n&#955; = dsin&#920;",
      "C" : "n&#955; = 3dsin&#920;",
      "D" : "n&#955; = 4dsin&#920;",
      "ans" : "A",
    },
    13: {
      "Q" : "What is the condition for destructive interference in Bragg's Law?",
      "A" : "n&#955; = 2dsin&#920;",
      "B" : "n&#955; = dsin&#920;",
      "C" : "n&#955; = 3dsin&#920;",
      "D" : "n&#955; = 4dsin&#920;",
      "ans" : "B",
    },
    14: {
      "Q" : "What happens to the diffraction pattern when the crystal is rotated in Bragg's Law?",
      "A" : "The diffraction pattern disappears.",
      "B" : "The diffraction pattern remains the same.",
      "C" : "The diffraction pattern changes.",
      "D" : "The crystal shatters.",
      "ans" : "C",
    },
    15: {
      "Q" : "What is the significance of the 'n' in Bragg's Law?",
      "A" : "It determines the angle of incidence.",
      "B" : "It determines the angle of diffraction.",
      "C" : "It determines the order of the diffraction peak.",
      "D" : "It determines the intensity of the diffraction peak.",
      "ans" : "C",
    },
    16: {
      "Q" : "What is the relationship between the wavelength of incident X-rays and the distance between crystal planes in Bragg's Law?",
      "A" : "They are directly proportional.",
      "B" : "They are inversely proportional.",
      "C" : "There is no relationship between them.",
      "D" : "The relationship depends on angle of incidence.",
      "ans" : "B",
    },
    17: {
      "Q" : "What is the significance of the angle of incidence in Bragg's Law?",
      "A" : "It determines the order of the diffraction peak.",
      "B" : "It determines the angle of diffraction.",
      "C" : "It determines the distance between crystal planes.",
      "D" : "It determines the intensity of the diffraction peak.",
      "ans" : "B",
    },
    18: {
      "Q" : "What is the maximum value of 'n' in Bragg's Law?",
      "A" : "Infinity",
      "B" : "1",
      "C" : "2",
      "D" : "3",
      "ans" : "A",
    },
    19: {
      "Q" : "Which type of radiation is commonly used in X-ray diffraction experiments?",
      "A" : "Gamma Radiation",
      "B" : "Ultra Violet Radiation",
      "C" : "X-Ray Radiation",
      "D" : "Infrared Radiation",
      "ans" : "C",
    },
    20: {
      "Q" : " What is the importance of Bragg's Law in the study of crystal structures?",
      "A" : "It provides a method for determining the crystal structure of materials.",
      "B" : "It provides a method for determining the melting point of materials.",
      "C" : "It provides a method for determining the density of materials",
      "D" : "It provides a method for determining the electrical conductivity of materials.",
      "ans" : "A",
    }
}

function queHTML(ind){
  var que = que_data[ind];
  var que_html = "<div name='"+ind+"' class='question bg-white p-3 border-bottom'>"+
  "    <div class='d-flex flex-row align-items-center question-title'>"+
  "        <h3 class='text-danger'>Q.</h3>"+
  "        <h5 class='mt-1 ml-2'>"+que["Q"]+"</h5>"+
  "    </div>"+
  "    <div class='ans ml-2'>"+
  "        <label class='radio'> <input type='radio' name='"+ind+"' value='A'> <span>"+que["A"]+"</span>"+
  "        </label>"+
  "    </div>"+
  "    <div class='ans ml-2'>"+
  "        <label class='radio'> <input type='radio' name='"+ind+"' value='B'> <span>"+que["B"]+"</span>"+
  "        </label>"+
  "    </div>"+
  "    <div class='ans ml-2'>"+
  "        <label class='radio'> <input type='radio' name='"+ind+"' value='C'> <span>"+que["C"]+"</span>"+
  "        </label>"+
  "    </div>"+
  "    <div class='ans ml-2'>"+
  "        <label class='radio'> <input type='radio' name='"+ind+"' value='D'> <span>"+que["D"]+"</span>"+
  "        </label>"+
  "    </div>"+
  "</div>";
  return que_html;
}

function fillQue()
{
  $("#resultDiv").hide();
  var total_que  = Object.keys(que_data).length;
  
  var numberRange = Array.from({ length: total_que }, (_, index) => index + 1)
  var shuffledArray = numberRange.sort(() => Math.random() - 0.5);
  var sample = shuffledArray.slice(0, sample_que);
  var que_html = "";
  sample.forEach(ind => {
    que_html += queHTML(ind);
  });
  que_html += "<button type='submit' class='btn btn-success'>Submit</button>"
  $("#quiz-form").html(que_html);
  questions = document.querySelectorAll('.question');
}
fillQue();





form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  let score = 0;

  questions.forEach(que => {
    var sel_option = que.querySelector('input:checked');
    var correct_option = que.querySelector("input[value='"+que_data[que.getAttribute('name')]["ans"]+"'");
    if(sel_option==null)
    {
      $(correct_option.nextSibling.nextSibling).addClass("correct");
      $(que.getElementsByTagName("h5")[0]).addClass("not-attempted");
      
    }
    else 
    {
      if(sel_option["value"]==que_data[sel_option["name"]]["ans"])
      {
        score+=1;
      }
      $(sel_option.nextSibling.nextSibling).addClass("incorrect");
      $(correct_option.nextSibling.nextSibling).addClass("correct");
    }
    
  });

  var result_html = "<p><span class='correctLeg'></span>&emsp;Correct Answer</p>"+
  "<p><span class='incorrectLeg'></span>&emsp;Incorrect Selected Option</p>"+
  "<p><span class='unattemptedLeg'></span>&emsp;Unattempted Question</p>"+
  "<hr>"+
  "<h2>Score : <b>"+score+"</b>/"+sample_que+"&emsp;<i id='resetQue' onclick='fillQue()' class='fa-solid fa-arrows-rotate'></i> </h2>";
  $("#resultDiv").html(result_html);
  $("#resultDiv").show();

});
