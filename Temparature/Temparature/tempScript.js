
var T_input=document.getElementById('fr_t');
var T_output=document.getElementById('to_t');

var tem1=document.getElementById('tem1');
var tem2=document.getElementById('tem2');
var input_t,output_t;

T_input.addEventListener("keyup",myoutput_T);
tem1.addEventListener("change",myoutput_T);
tem2.addEventListener("change",myoutput_T);

input_t=tem1.value;
output_t=tem2.value;
function myoutput_T()
{
    input_t=tem1.value;
    output_t=tem2.value;
    if(input_t === "TC" )
    {
        switch(output_t)
        {
            case "TC1":T_output.value=Number(T_input.value)*1;break;
            case "TK1":T_output.value=Number(T_input.value)*274.15;break;
            case "TF1":T_output.value=Number(T_input.value)*33.8;break;
        }
    }
    else if(input_t === "TK" )
    {
        switch(output_t)
        {
            case "TC1":T_output.value=Number(T_input.value)*-272.15;break;
            case "TK1":T_output.value=Number(T_input.value)*1;break;
            case "TF1":T_output.value=Number(T_input.value)*-457.87;break;
        }
    }
    else if(input_t === "TF" )
    {
        switch(output_t)
        {
            case "TC1":T_output.value=Number(T_input.value)*-17.2222;break;
            case "TK1":T_output.value=Number(T_input.value)*255.928;break;
            case "TF1":T_output.value=Number(T_input.value)*1;break;
        }
    }
}