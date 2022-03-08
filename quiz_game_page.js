player1name=localStorage.getItem("name1");
player2name=localStorage.getItem("name2");
question_turn="player1";
answer_turn="player2";

player1score=0;
player2score=0;

document.getElementById("p1name").innerHTML=player1name + ":";
document.getElementById("p2name").innerHTML=player2name + ":";

document.getElementById("player1_score").innerHTML=player1score;
document.getElementById("player2_score").innerHTML=player2score;

document.getElementById("player_ques").innerHTML="Question turn="+player1name;
document.getElementById("player_ans").innerHTML="Answer turn="+player2name;

function send(){
number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;
actual_answer = parseInt(number1) * parseInt(number2);
console.log(actual_answer);



question_number="<h4>" + number1 + "X" + number2 + "</h4>";
input_box= "<br>Answer: <input type='text' id='input_check_box'>";
check_button="<br><br><button class='btn btn-primary' onclick='check()'>Check</button>";
row= question_number + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("number1").innerHTML = "";
document.getElementById("number2").innerHTML = "";
}

function check(){
    get_answer=document.getElementById("input_check_box").value;
    if(answer_turn == "player_1"){
        update_player1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML = update_player1_score;
    }
    else{
        update_player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = update_player2_score;
    }

    if(question_turn == "player_1"){
        question_turn == "player_2";
        document.getElementById("player_question").innerHTML="Question Turn-" + player2_name;
    }

    if(question_turn == "player_2"){
        question_turn == "player_1";
        document.getElementById("player_question").innerHTML="Question Turn-" + player1_name;
    }

    if(answer_turn == "player_1"){
        answer_turn == "player_2";
        document.getElementById("player_answer").innerHTML="Answer Turn-" + player2_name;
    }

    if(answer_turn == "player_2"){
        answer_turn == "player_1";
        document.getElementById("player_answer").innerHTML="Answer Turn-" + player1_name;
    }
}

//p1name or player_1