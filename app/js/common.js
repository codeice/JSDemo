/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-06-11 14:58:03
 * @version $Id$
 */


/*求最大值*/
function max(arrays)
{
	var max=arrays[0];
	for (var i = arrays.length - 1; i >= 0; i--) {
		if(arrays[i]>max)
		{
			max=arrays[i];
		}
	};
	console.log("max value is ", max);
}


/*将一个数组用分隔符连接成一个字符串*/
function myJoin(arrays,seperator)
{
	/*strs.join('|');*/
	var str=arrays[0]+seperator;
	for(var i=1;i<arrays.length-1;i++)
	{
		str+=arrays[i]+seperator;
	}
	str+=arrays[arrays.length-1];
	console.log("joined value is ", str);
}

//
function myReverse(arrays)
{

	console.log("原始数组",arrays);

	var midIndex=arrays.length/2;
	for(var i=0;i<midIndex; i++)
	{
		var temp=arrays[i];
		arrays[i]=arrays[arrays.length-1-i];
		arrays[arrays.length-1-i]=temp;
	}
	console.log("反序后的数组",arrays);
}


/*二分查找法*/
function binarySearch(srcArray, dest)
{
	console.log("二分查找必须是针对有序数组",srcArray);
	var low=0;
	var high=srcArray.length-1;
	while(low<=high){
		var mid=(high+low)/2;
		if(dest==srcArray[mid])
		{
			return mid;
		}else if(dest<srcArray[mid])
		{
			high=mid-1;
		}else{
			low=mid+1;
		}
	}
	return -1;
}


Array.prototype.max=function(){
	var i,max=this[0];
	for(var i=0;i<this.length;i++)
	{
		if(max<this[i])
		{
			max=this[i];
		}
	}
	return max;
}

