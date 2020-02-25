/* module.exports = function toReadable (number) {
  const obj = {
    '0': '',
    '00':'',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
    '20': 'twenty',
    '30': 'thirty',
    '40': 'forty',
    '50': 'fifty',
    '60': 'sixty',
    '70': 'seventy',
    '80': 'eighty',
    '90': 'ninety',
    'hundred': 'hundred'
  }
  if(number== 0) return 'zero';
  let arr = String(number).split('');
  for(let j = arr.length-2;j >= 0;j-=3){
    if(arr[j]=='1'){ 
        arr[j]=arr[j]+arr[j+1];
        arr=arr.splice(0,arr.length-1,'')
    }
    else arr[j]=arr[j]+0;
    if(j>0)arr.splice(j,0,'hundred');
  }
  for(let j = 0; j < arr.length; j++){
    arr[j]=obj[arr[j]];
  }
  arr=arr.join(' ');
  while(arr.includes('  '))arr=arr.replace('  ',' ');
  if(arr[arr.length-1]==' ')arr=arr.slice(0,arr.length-1);
  return arr;}
*/
module.exports = function toReadable (number) {
    const obj = {
      '0':'',
      '1': 'one',
      '2': 'two',
      '3': 'three',
      '4': 'four',
      '5': 'five',
      '6': 'six',
      '7': 'seven',
      '8': 'eight',
      '9': 'nine'
    }
    if(number==0) return 'zero';
    let arr = String(number).split('').map(function(element){return obj[element];});
    for(let j = arr.length-2;j >= 0;j-=3){
      arr[j]=arr[j]+'ty';
      if(j>0)arr.splice(j,0,'hundred');
    }
    let str=arr.join(' ').replace('fourty','forty')
    .replace('threety','thirty')
    .replace('fivety','fifty')
    .replace('eightty','eighty')
    .replace('twoty', 'twenty')
    .replace('onety one','eleven')
    .replace('onety two','twelve')
    .replace('onety three', 'thirteen')
    .replace('onety four','fourteen')
    .replace('onety five','fifteen')
    .replace('onety six','sixteen')
    .replace('onety seven', 'seventeen')
    .replace('onety eight', 'eighteen')
    .replace('onety nine','nineteen')
    .replace('onety','ten')
    .replace(' ty ',' ');
    if(str[str.length-1]==' ')str=str.slice(0,str.length-1);
    return str;
  }
  