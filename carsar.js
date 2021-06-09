<!--자바스크립트 부분-->
<script>
 
 function caesar(check12)
 {
  var inputtext = document.getElementsByName('inputText')[0].value;
  var temptext =[];
 
  switch(check12)
  {
   case 0:
 
    for (var i = inputtext.length-1; i >= 0; i--)
    {
     temptext[i] = inputtext[i].charCodeAt(0);
     if (temptext[i]==97){temptext[i]=123;}
     if (temptext[i]==65){temptext[i]=91;}
     if ((temptext[i]<=60 || temptext[i]>125) || (temptext[i]<96 && temptext[i]>91))
     {
      temptext[i] = String.fromCharCode(temptext[i]);
     }
      else
     {
      temptext[i] = String.fromCharCode(temptext[i]-1);
     }
    };
 
    document.getElementsByName('inputText')[0].value = temptext;
 
    document.getElementsByName('inputText')[0].value = document.getElementsByName('inputText')[0].value.replace(/\,/g,"");
 
   break;
 
   case 1:
 
    for (var i = inputtext.length-1; i >= 0; i--)
    {
     temptext[i] = inputtext[i].charCodeAt(0);
     if (temptext[i]==122){temptext[i]=96;}
     if (temptext[i]==90){temptext[i]=64;}
 
     if ((temptext[i]<64 || temptext[i]>=125) || (temptext[i]<96 && temptext[i]>=90))
     {
      temptext[i] = String.fromCharCode(temptext[i]);
     }
      else
     {
      temptext[i] = String.fromCharCode(temptext[i]+1);
     }
    };
 
    document.getElementsByName('inputText')[0].value = temptext;
 
    document.getElementsByName('inputText')[0].value = document.getElementsByName('inputText')[0].value.replace(/\,/g,"");
   break;
 
   default:
    alert("오류입니다 관리자에게 문의해주세요.");
   break;
  }
 
  return;
 }
 
</script> 
 
 
 
<!--form 영역-->
<form align="center"  onsubmit="return false;">
<textarea class=" form-control" style="width:600px; height:200px;" align="center" placeholder="해독할 문장을 적으시고 열쇠의 숫자만큼 + 버튼을 눌러주세요." name="inputText" type="text"></textarea>
<input onClick="caesar(0);" type="button" value="-1">
<input onClick="caesar(1);" type="button" value="+1">
</form>
