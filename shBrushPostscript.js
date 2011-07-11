SyntaxHighlighter.brushes.Postscript = function()
{
	var keywords = 'abs add aload anchorsearch and arc arcn arct arcto array ASCII85Decode ASCII85Encode ASCIIHexDecode ASCIIHexEncode ashow astore atan ﬂattenpath awidthshow banddevice begin bind bitshift bytesavailable cachestatus CCITTFaxDecode CCITTFaxEncode ceiling charpath CIEBasedA CIEBasedABC CIEBasedDEF CIEBasedDEFG clear cleardictstack cleartomark clip clippath closeﬁle closepath colorimage concat concatmatrix condition copy copypage cos count countdictstack countexecstack counttomark Courier Courier-Bold Courier-BoldOblique Courier-Oblique cshow currentﬂat currentblackgeneration currentcacheparams currentcmykcolor currentcolor currentcolorrendering currentcolorscreen currentcolorspace currentcolortransfer currentcontext currentdash currentdevparams currentdict currentfont currentglobal currentgray currentgstate currenthalftone currenthalftonephase currenthsbcolor currentﬁle currentlinecap currentlinejoin currentlinewidth currentmatrix currentmiterlimit currentobjectformat currentoverprint currentpacking currentpagedevice currentpoint currentrgbcolor currentscreen currentshared currentstrokeadjust currentsystemparams currenttransfer currentundercolorremoval currentuserparams curveto cvi cvlit cvn cvr cvrs cvs cvx DCTDecode DCTEncode def defaultmatrix deleteﬁle deﬁnefont deﬁneresource deﬁneusername deﬁneuserobject detach DeviceCMYK DeviceGray deviceinfo DeviceN DeviceRGB dict dictstack div dtransform dup echo end eoclip eoﬁll eoviewclip eq erasepage errordict exch exec execform execstack execuserobject executeonly exit exp false FontDirectory for forall fork framedevice gcheck ge get getinterval globaldict GlobalFontDirectory glyphshow grestore grestoreall gsave gstate gt handleerror Helvetica Helvetica-Bold Helvetica-BoldOblique Helvetica-Oblique identmatrix idiv idtransform if ifelse image imagemask index Indexed ineoﬁll initclip initgraphics initmatrix initviewclip inﬁll instroke inueoﬁll inuﬁll inustroke invertmatrix ISOLatin1Encoding itransform join known kshow languagelevel le ﬁle ﬁlenameforall length ﬁleposition lineto ﬁll ln load lock log loop lt ﬁlter LZWDecode LZWEncode makefont makepattern mark matrix maxlength mod monitor moveto mul ﬁndencoding ﬁndfont ﬁndresource ne neg newpath noaccess not notify null nulldevice NullEncode ﬂoor or packedarray pathbbox pathforall Pattern pop print printobject product pstack put putinterval quit rand rcheck rcurveto read readhexstring readline readonly readstring realtime rectclip rectﬁll rectstroke rectviewclip renameﬁle renderbands repeat resetﬁle resourceforall resourcestatus restore reversepath revision rlineto rmoveto roll rootfont rotate round rrand run RunLengthDecode RunLengthEncode save scale scalefont scheck search selectfont Separation serialnumber setﬂat setbbox setblackgeneration setcachedevice setcachedevice2 setcachelimit setcacheparams setcharwidth setcmykcolor setcolor setcolorrendering setcolorscreen setcolorspace setcolortransfer setdash setdevparams setfont setglobal setgray setgstate sethalftone sethalftonephase sethsbcolor setﬁleposition setlinecap setlinejoin setlinewidth setmatrix setmiterlimit setobjectformat setoverprint setpacking setpagedevice setpattern setrgbcolor setscreen setshared setstrokeadjust setsystemparams settransfer setucacheparams setundercolorremoval setuserparams setvmthreshold shareddict SharedFontDirectory show showpage sin sqrt srand stack StandardEncoding startjob status statusdict stop stopped store string stringwidth stroke strokepath sub SubFileDecode Symbol systemdict System Name Encodings Times-Bold Times-BoldItalic Times-Italic Times-Roman token transform translate true truncate type uappend ucache ucachestatus ueoﬁll uﬁll undef undeﬁnefont undeﬁneresource undeﬁneuserobject upath userdict UserObjects usertime ﬂush ﬂushﬁle ustroke ustrokepath version viewclip viewclippath vmreclaim vmstatus wait wcheck where widthshow write writehexstring writeobject writestring wtranslation xcheck xor xshow xyshow yield yshow';
	
	this.regexList = [
		{ regex: /%.*$/g,                                       css: 'comments' }, // comments
		{ regex: /\([^)]*\)/,                                   css: 'string' },   // string
		{ regex: /\b\d+(\.\d+)?\b/g,                            css: 'value' },    // numbers
		{ regex: /\/\w+/g,                                      css: 'constants'}, // symbols
		{ regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' }   // reserved words
	];
};
 
SyntaxHighlighter.brushes.Postscript.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Postscript.aliases = ['Postscript', 'postscript', 'ps'];
