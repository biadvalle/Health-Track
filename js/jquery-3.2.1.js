/ *!
 * Biblioteca JavaScript jQuery v3.2.1
 * https://jquery.com/
 *
 * Inclui Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation e outros contribuidores
 * Lançado sob a licença do MIT
 * https://jquery.org/license
 *
 * Data: 20-03-2017 18: 59Z
 * /
(  função (  global ,  fábrica  )  {

	"use estrito" ;

	if  (  módulo typeof  === "objeto" && módulo typeof . exportações === "objeto" ) {

		// Para ambientes do tipo CommonJS e CommonJS onde uma `janela` adequada
		// está presente, execute a fábrica e obtenha o jQuery.
		// Para ambientes que não possuem uma `janela` com um` documento`
		// (como Node.js), exponha uma fábrica como module.exports.
		// Isso acentua a necessidade de criação de uma `janela` real.
		// por exemplo, var jQuery = require ("jquery") (janela);
		// Veja tíquete # 14549 para mais informações.
		módulo . exportações  =  global . documento ?
			fábrica (  global ,  verdadeiro  ) :
			function (  w  )  {
				if  (  ! w . documento  )  {
					lançar um  novo  erro (  "jQuery requer uma janela com um documento"  ) ;
				}
				retorno de  fábrica (  w  ) ;
			} ;
	}  else  {
		fábrica (  global  ) ;
	}

// Passe se a janela ainda não estiver definida
}  ) (  typeof  window  ! ==  "undefined" ? window : this ,  function (  window ,  noGlobal  )  {

// Edge <= 12 - 13+, Firefox <= 18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// lança exceções quando o código não estrito (por exemplo, ASP.NET 4.5) acessa o modo estrito
// argumentos.callee.caller (trac-13335). Mas a partir do jQuery 3.0 (2016), o modo estrito deve ser comum
// o suficiente para que todas essas tentativas sejam protegidas em um bloco try.
"use estrito" ;

var  arr  =  [ ] ;

var  document  =  window . documento ;

var  getProto  =  Object . getPrototypeOf ;

 fatia  var =  arr . fatia ;

var  concat  =  arr . concat ;

var  push  =  arr . empurrar ;

var  indexOf  =  arr . indexOf ;

var  class2type  =  { } ;

var  toString  =  class2type . toString ;

var  hasOwn  =  class2type . hasOwnProperty ;

var  fnToString  =  hasOwn . toString ;

var  ObjectFunctionString  =  fnToString . chamar (  objeto  ) ;

var  support  =  { } ;



	function  DOMEval (  código ,  doc  )  {
		doc  =  doc  ||  documento ;

		var  script  =  doc . createElement (  "script"  ) ;

		script . texto  =  código ;
		doc . cabeça . appendChild (  script  ) . parentNode . removeChild (  script  ) ;
	}
/ * símbolo global * /
// Definir este global em .eslintrc.json criaria o perigo de usar o global
// desprotegido em outro lugar, parece mais seguro definir global apenas para este módulo



var
	versão  =  "3.2.1" ,

	// Defina uma cópia local do jQuery
	jQuery  =  function (  seletor ,  contexto  )  {

		// O objeto jQuery é na verdade apenas o construtor init 'aprimorado'
		// Precisa de init se jQuery for chamado (apenas permita que o erro seja lançado se não incluído)
		retornar  novo  jQuery . fn . init (  seletor ,  contexto  ) ;
	} ,

	// Suporte: Android <= 4.0 apenas
	// Certifique-se de cortar BOM e NBSP
	rtrim  =  / ^ [ \ s \ u FEFF \ x A0 ] + | [ \ s \ u FEFF \ x A0 ] + $ / g ,

	// Corresponde à string tracejada para camelizar
	rmsPrefix  =  / ^ -ms- / ,
	rdashAlpha  =  / - ( [ az ] ) / g ,

	// Usado por jQuery.camelCase como retorno de chamada para replace ()
	fcamelCase  =  function (  all ,  letter  )  {
		 carta de retorno . toUpperCase ( ) ;
	} ;

jQuery . fn  =  jQuery . protótipo  =  {

	// A versão atual do jQuery sendo usado
	jquery : version ,

	construtor : jQuery ,

	// O comprimento padrão de um objeto jQuery é 0
	comprimento : 0 ,

	toArray : function ( )  {
		 fatia de retorno . ligar (  isso  ) ;
	} ,

	// Obtenha o enésimo elemento no conjunto de elementos correspondentes OU
	// Obtenha todo o elemento correspondente definido como um array limpo
	get : function (  num  )  {

		// Retorna todos os elementos em um array limpo
		if  (  num  ==  null  )  {
			 fatia de retorno . ligar (  isso  ) ;
		}

		// Retorna apenas um elemento do conjunto
		retornar  num  <  0 ? isso [  num  +  isso . comprimento  ] : este [  num  ] ;
	} ,

	// Pegue um array de elementos e coloque-o na pilha
	// (retornando o novo conjunto de elementos correspondentes)
	pushStack : function (  elems  )  {

		// Construir um novo conjunto de elementos correspondentes do jQuery
		var  ret  =  jQuery . mesclar (  this . constructor ( ) ,  elems  ) ;

		// Adicione o objeto antigo na pilha (como uma referência)
		ret . prevObject  =  this ;

		// Retorna o conjunto de elementos recém-formado
		return  ret ;
	} ,

	// Executa um retorno de chamada para cada elemento no conjunto correspondente.
	cada : função (  retorno de chamada  )  {
		return  jQuery . cada (  isto ,  retorno de chamada  ) ;
	} ,

	map : function (  callback  )  {
		devolva  isso . pushStack (  jQuery . map (  this ,  function (  elem ,  i  )  {
			retorno de  chamada . chamar (  elem ,  i ,  elem  ) ;
		}  )  ) ;
	} ,

	fatia : function ( )  {
		devolva  isso . pushStack (  fatia . aplicar (  isto ,  argumentos  )  ) ;
	} ,

	primeiro : function ( )  {
		devolva  isso . eq (  0  ) ;
	} ,

	último : function ( )  {
		devolva  isso . eq (  - 1  ) ;
	} ,

	eq : função (  i  )  {
		var  len  =  this . comprimento ,
			j  =  + i  +  (  i  <  0 ? len : 0  ) ;
		devolva  isso . pushStack (  j  > =  0  &&  j  <  len ? [  this [  j  ]  ] : [ ]  ) ;
	} ,

	end : function ( )  {
		devolva  isso . prevObject  ||  isso . construtor ( ) ;
	} ,

	// Apenas para uso interno.
	// Se comporta como um método de Array, não como um método jQuery.
	push : push ,
	sort : arr . classificar ,
	splice : arr . emenda
} ;

jQuery . extend  =  jQuery . fn . extend  =  function ( )  {
	 opções de var ,  nome ,  src ,  cópia ,  copyIsArray ,  clone ,
		destino  =  argumentos [  0  ]  ||  { } ,
		i  =  1 ,
		comprimento  =  argumentos . comprimento ,
		profundo  =  falso ;

	// Lidar com uma situação de cópia profunda
	if  (  typeof  target  ===  "boolean"  )  {
		profundo  =  alvo ;

		// Pula o booleano e o destino
		alvo  =  argumentos [  i  ]  ||  { } ;
		i ++ ;
	}

	// Trate o caso quando o alvo for uma string ou algo (possível em cópia profunda)
	if  (  typeof  target  ! ==  "object"  &&  ! jQuery . isFunction (  target  )  )  {
		alvo  =  { } ;
	}

	// Estende o próprio jQuery se apenas um argumento for passado
	if  (  i  ===  comprimento  )  {
		alvo  =  isso ;
		i - ;
	}

	para  (  ;  i  <  comprimento ;  i ++  )  {

		// Lidar apenas com valores não nulos / indefinidos
		if  (  (  opções  =  argumentos [  i  ]  )  ! =  nulo  )  {

			// Estende o objeto base
			para  (  nome  em  opções  )  {
				src  =  destino [  nome  ] ;
				copiar  =  opções [  nome  ] ;

				// Impedir loop sem fim
				if  (  target  ===  copy  )  {
					continue ;
				}

				// Recapitule se estivermos mesclando objetos simples ou matrizes
				if  (  deep  &&  copy  &&  (  jQuery . isPlainObject (  copy  )  ||
					(  copyIsArray  =  Array . isArray (  copiar  )  )  )  )  {

					if  (  copyIsArray  )  {
						copyIsArray  =  false ;
						clone  =  src  &&  Array . isArray (  src  ) ? src : [ ] ;

					}  else  {
						clone  =  src  &&  jQuery . isPlainObject (  src  ) ? src : { } ;
					}

					// Nunca mova objetos originais, clone-os
					destino [  nome  ]  =  jQuery . extender (  profundo ,  clone ,  copiar  ) ;

				// Não introduza valores indefinidos
				}  else  if  (  copy  ! ==  undefined  )  {
					destino [  nome  ]  =  cópia ;
				}
			}
		}
	}

	// Retorna o objeto modificado
	 alvo de retorno ;
} ;

jQuery . extend (  {

	// Único para cada cópia do jQuery na página
	expando : "jQuery"  +  (  versão  +  Math . random ( )  ) . substituir (  / \ D / g ,  ""  ) ,

	// Assume que o jQuery está pronto sem o módulo pronto
	isReady : true ,

	erro : função (  msg  )  {
		lançar  novo  erro (  msg  ) ;
	} ,

	noop : function ( )  { } ,

	isFunction : function (  obj  )  {
		return  jQuery . tipo (  obj  )  ===  "função" ;
	} ,

	isWindow : function (  obj  )  {
		return  obj  ! =  null  &&  obj  ===  obj . janela ;
	} ,

	isNumeric : function (  obj  )  {

		// A partir do jQuery 3.0, isNumeric é limitado a
		// strings e números (primitivos ou objetos)
		// que pode ser forçado a números finitos (gh-2662)
		var  type  =  jQuery . tipo (  obj  ) ;
		return  (  type  ===  "número"  ||  type  ===  "string"  )  &&

			// parseFloat NaNs numeric-cast falsos positivos ("")
			// ... mas interpreta erroneamente strings de números iniciais, particularmente literais hexadecimais ("0x ...")
			// subtração força infinitos para NaN
			! isNaN (  obj  -  parseFloat (  obj  )  ) ;
	} ,

	isPlainObject : function (  obj  )  {
		var  proto ,  Ctor ;

		// Detecta negativos óbvios
		// Use toString em vez de jQuery.type para capturar objetos de host
		if  (  ! obj  ||  toString . call (  obj  )  ! ==  "[Object Object]"  )  {
			return  false ;
		}

		proto  =  getProto (  obj  ) ;

		// Objetos sem protótipo (por exemplo, `Object.create (null)`) são simples
		if  (  ! proto  )  {
			return  true ;
		}

		// Objetos com protótipo são simples se forem construídos por uma função de objeto global
		Ctor  =  hasOwn . chamar (  proto ,  "construtor"  )  &&  proto . construtor ;
		return  typeof  Ctor  ===  "função"  &&  fnToString . call (  Ctor  )  ===  ObjectFunctionString ;
	} ,

	isEmptyObject : function (  obj  )  {

		/ * eslint-disable no-unused-vars * /
		// Veja https://github.com/eslint/eslint/issues/6125
		var  name ;

		para  (  nome  em  obj  )  {
			return  false ;
		}
		return  true ;
	} ,

	tipo : função (  obj  )  {
		if  (  obj  ==  null  )  {
			return  obj  +  "" ;
		}

		// Suporte: Android <= 2.3 apenas (RegExp funcional)
		return  typeof  obj  ===  "objeto"  ||  typeof  obj  ===  "função" ?
			class2type [  toString . chamar (  obj  )  ]  ||  "objeto" :
			typeof  obj ;
	} ,

	// Avalia um script em um contexto global
	globalEval : function (  code  )  {
		DOMEval (  código  ) ;
	} ,

	// Converter tracejado em camelCase; usado pelos módulos css e dados
	// Suporte: IE <= 9 - 11, Edge 12 - 13
	// A Microsoft esqueceu de aumentar o prefixo do fornecedor (# 9572)
	camelCase : function (  string  )  {
		 string de retorno . substituir (  rmsPrefix ,  "  ms- " ) . substituir (  rdashAlpha ,  fcamelCase  ) ;
	} ,

	each : function (  obj ,  callback  )  {
		 comprimento var ,  i  =  0 ;

		if  (  isArrayLike (  obj  )  )  {
			comprimento  =  obj . comprimento ;
			para  (  ;  i  <  comprimento ;  i ++  )  {
				if  (  callback . call (  obj [  i  ] ,  i ,  obj [  i  ]  )  ===  false  )  {
					pausa ;
				}
			}
		}  else  {
			para  (  i  em  obj  )  {
				if  (  callback . call (  obj [  i  ] ,  i ,  obj [  i  ]  )  ===  false  )  {
					pausa ;
				}
			}
		}

		return  obj ;
	} ,

	// Suporte: Android <= 4.0 apenas
	trim : function (  text  )  {
		return  text  ==  null ?
			"" :
			(  texto  +  ""  ) . substituir (  rtrim ,  ""  ) ;
	} ,

	// resultados são apenas para uso interno
	makeArray : function (  arr ,  results  )  {
		var  ret  =  resultados  ||  [ ] ;

		if  (  arr  ! =  null  )  {
			if  (  isArrayLike (  Object (  arr  )  )  )  {
				jQuery . mesclar (  ret ,
					typeof  arr  ===  "string" ?
					[  arr  ] : arr
				) ;
			}  else  {
				empurre . chamada (  ret ,  arr  ) ;
			}
		}

		return  ret ;
	} ,

	inArray : function (  elem ,  arr ,  i  )  {
		return  arr  ==  null ? - 1 : indexOf . chamada (  arr ,  elem ,  i  ) ;
	} ,

	// Suporte: Android <= 4.0 apenas, PhantomJS 1 apenas
	// push.apply (_, arraylike) lança no antigo WebKit
	mesclar : função (  primeiro ,  segundo  )  {
		var  len  =  + segundo . comprimento ,
			j  =  0 ,
			i  =  primeiro . comprimento ;

		para  (  ;  j  <  len ;  j ++  )  {
			primeiro [  i ++  ]  =  segundo [  j  ] ;
		}

		primeiro . comprimento  =  i ;

		volte  primeiro ;
	} ,

	grep : function (  elems ,  callback ,  invert  )  {
		var  callbackInverse ,
			corresponde a  =  [ ] ,
			i  =  0 ,
			comprimento  =  elems . comprimento ,
			callbackExpect  =  ! inverter ;

		// Percorra a matriz, salvando apenas os itens
		// que passa a função de validador
		para  (  ;  i  <  comprimento ;  i ++  )  {
			callbackInverse  =  ! retorno de chamada (  elems [  i  ] ,  i  ) ;
			if  (  callbackInverse  ! ==  callbackExpect  )  {
				jogos . empurrar (  elems [  i  ]  ) ;
			}
		}

		retornar  partidas ;
	} ,

	// arg é apenas para uso interno
	map : function (  elems ,  callback ,  arg  )  {
		 comprimento var ,  valor ,
			i  =  0 ,
			ret  =  [ ] ;

		// Percorra a matriz, traduzindo cada um dos itens para seus novos valores
		if  (  isArrayLike (  elems  )  )  {
			comprimento  =  elems . comprimento ;
			para  (  ;  i  <  comprimento ;  i ++  )  {
				valor  =  retorno de chamada (  elems [  i  ] ,  i ,  arg  ) ;

				if  (  valor  ! =  nulo  )  {
					ret . push (  valor  ) ;
				}
			}

		// Passe por cada chave do objeto,
		}  else  {
			para  (  i  em  elementos  )  {
				valor  =  retorno de chamada (  elems [  i  ] ,  i ,  arg  ) ;

				if  (  valor  ! =  nulo  )  {
					ret . push (  valor  ) ;
				}
			}
		}

		// Achatar quaisquer matrizes aninhadas
		retornar  concat . aplicar (  [ ] ,  ret  ) ;
	} ,

	// Um ​​contador GUID global para objetos
	guid : 1 ,

	// Vincula uma função a um contexto, opcionalmente aplicando parcialmente qualquer
	// argumentos.
	proxy : função (  fn ,  contexto  )  {
		var  tmp ,  args ,  proxy ;

		if  (  typeof  context  ===  "string"  )  {
			tmp  =  fn [  contexto  ] ;
			contexto  =  fn ;
			fn  =  tmp ;
		}

		// Verificação rápida para determinar se o destino pode ser chamado, na especificação
		// isso lança um TypeError, mas vamos apenas retornar undefined.
		if  (  ! jQuery . isFunction (  fn  )  )  {
			retornar  indefinido ;
		}

		// Simulated bind
		args  =  fatia . chamada (  argumentos ,  2  ) ;
		proxy  =  função ( )  {
			return  fn . aplicar (  contexto  ||  this ,  args . concat (  slice . call (  argumentos  )  )  ) ;
		} ;

		// Defina o guid do manipulador exclusivo para o mesmo do manipulador original, para que possa ser removido
		proxy . guid  =  fn . guid  =  fn . guid  ||  jQuery . guid ++ ;

		 proxy de retorno ;
	} ,

	agora : data . agora ,

	// jQuery.support não é usado no Core, mas outros projetos anexam seus
	// propriedades para ele, então ele precisa existir.
	suporte : suporte
}  ) ;

if  (  símbolo typeof  === "função" ) {
	jQuery . fn [  Símbolo . iterador  ]  =  arr [  Símbolo . iterador  ] ;
}

// Preencher o mapa class2type
jQuery . each (  "Boolean Number String Função Array Date RegExp Object Error Symbol" . split (  ""  ) ,
função (  i ,  nome  )  {
	class2type [  "[objeto"  +  nome  +  "]"  ]  =  nome . toLowerCase ( ) ;
}  ) ;

function  isArrayLike (  obj  )  {

	// Suporte: apenas iOS 8.2 real (não reproduzível no simulador)
	// verificação `in` usada para evitar erro JIT (gh-2145)
	// hasOwn não é usado aqui devido a falsos negativos
	// em relação ao comprimento Nodelist no IE
	var  length  =  ! ! obj  &&  "comprimento"  em  obj  &&  obj . comprimento ,
		type  =  jQuery . tipo (  obj  ) ;

	if  (  type  ===  "função"  ||  jQuery . isWindow (  obj  )  )  {
		return  false ;
	}

	return  type  ===  "array"  ||  comprimento  ===  0  ||
		typeof  length  ===  "número"  &&  length  >  0  &&  (  length  -  1  )  in  obj ;
}
var  Sizzle  =
/ *!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation e outros contribuidores
 * Lançado sob a licença do MIT
 * http://jquery.org/license
 *
 * Data: 08/08/2016
 * /
( função (  janela  )  {

var  i ,
	suporte ,
	Expr ,
	getText ,
	isXML ,
	tokenizar ,
	compilar ,
	selecione ,
	outermostContext ,
	sortInput ,
	hasDuplicate ,

	// Vars do documento local
	setDocument ,
	documento ,
	docElem ,
	documentIsHTML ,
	rbuggyQSA ,
	rbuggyMatches ,
	jogos ,
	contém ,

	// Dados específicos da instância
	expando  =  "chiar"  +  1  *  nova  data ( ) ,
	preferidoDoc  =  janela . documento ,
	dirruns  =  0 ,
	feito  =  0 ,
	classCache  =  createCache ( ) ,
	tokenCache  =  createCache ( ) ,
	compilerCache  =  createCache ( ) ,
	sortOrder  =  function (  a ,  b  )  {
		if  (  a  ===  b  )  {
			hasDuplicate  =  true ;
		}
		return  0 ;
	} ,

	// Métodos de instância
	hasOwn  =  ( { } ) . hasOwnProperty ,
	arr  =  [ ] ,
	pop  =  arr . pop ,
	push_native  =  arr . empurre ,
	push  =  arr . empurre ,
	fatia  =  arr . fatia ,
	// Use um indexOf reduzido, pois é mais rápido do que o nativo
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf  =  função (  lista ,  elem  )  {
		var  i  =  0 ,
			len  =  lista . comprimento ;
		para  (  ;  i  <  len ;  i ++  )  {
			if  (  list [ i ]  ===  elem  )  {
				return  i ;
			}
		}
		retorno  - 1 ;
	} ,

	booleans  =  "verificado | selecionado | assíncrono | foco automático | reprodução automática | controles | adiar | desativado | oculto | ismap | loop | múltiplo | aberto | somente leitura | necessário | escopo" ,

	// Expressões regulares

	// http://www.w3.org/TR/css3-selectors/#whitespace
	espaço em branco  =  "[\\ x20 \\ t \\ r \\ n \\ f]" ,

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identificador  =  "(?: \\\\. | [\\ w-] | [^ \ 0 - \\ xa0]) +" ,

	// Seletores de atributos: http://www.w3.org/TR/selectors/#attribute-selectors
	atributos  =  "\\ ["  +  espaço em branco  +  "* ("  +  identificador  +  ") (?:"  +  espaço em branco  +
		// Operador (captura 2)
		"* ([* ^ $ |! ~]? =)"  +  espaço em branco  +
		// "Os valores dos atributos devem ser identificadores CSS [captura 5] ou strings [captura 3 ou captura 4]"
		"* (?: '((?: \\\\. | [^ \\\\']) *) '| \" ((?: \\\\. | [^ \\\\\ "] ) *) \ "| ("  +  identificador  +  ")) |)"  +  espaço em branco  +
		"* \\]" ,

	pseudos  =  ":("  +  identificador  +  ") (?: \\ (("  +
		// Para reduzir o número de seletores que precisam de token no preFilter, prefira os argumentos:
		// 1. citado (captura 3; captura 4 ou captura 5)
		"('((?: \\\\. | [^ \\\\']) *) '| \" ((?: \\\\. | [^ \\\\\ "]) *) \ ") |"  +
		// 2. simples (captura 6)
		"((?: \\\\. | [^ \\\\ () [\\]] |"  +  atributos  +  ") *) |"  +
		// 3. qualquer outra coisa (captura 2)
		". *"  +
		") \\) |)" ,

	// Espaços em branco à esquerda e à direita sem escape, capturando alguns caracteres sem espaço em branco que precedem o último
	rwhitespace  =  novo  RegExp (  espaço em branco  +  "+" ,  "g"  ) ,
	rtrim  =  new  RegExp (  "^"  +  espaço em branco  +  "+ | ((?: ^ | [^ \\\\]) (?: \\\\.) *)"  +  espaço em branco  +  "+ $" ,  "g "  ) ,

	rcomma  =  new  RegExp (  "^"  +  espaço em branco  +  "*,"  +  espaço em branco  +  "*"  ) ,
	rcombinators  =  new  RegExp (  "^"  +  espaço em branco  +  "* ([> + ~] |"  +  espaço em branco  +  ")"  +  espaço em branco  +  "*"  ) ,

	rattributeQuotes  =  new  RegExp (  "="  +  espaço em branco  +  "* ([^ \\] '\"] *?) "  +  espaço em branco  +  " * \\] " ,  " g "  ) ,

	rpseudo  =  novo  RegExp (  pseudos  ) ,
	ridentifier  =  novo  RegExp (  "^"  +  identificador  +  "$"  ) ,

	matchExpr  =  {
		"ID" : novo  RegExp (  "^ # ("  +  identificador  +  ")"  ) ,
		"CLASSE" : novo  RegExp (  "^ \\. ("  +  Identificador  +  ")"  ) ,
		"TAG" : novo  RegExp (  "^ ("  +  identificador  +  "| [*])"  ) ,
		"ATTR" : novo  RegExp (  "^"  +  atributos  ) ,
		"PSEUDO" : novo  RegExp (  "^"  +  pseudos  ) ,
		"CHILD" : novo  RegExp (  "^ :( apenas | primeiro | último | enésimo | enésimo último) - (filho | do tipo) (?: \\ ("  +  espaço em branco  +
			"* (par | ímpar | (([+ -] |) (\\ d *) n |)"  +  espaço em branco  +  "* (?: ([+ -] |)"  +  espaço em branco  +
			"* (\\ d +) |))"  +  espaço em branco  +  "* \\) |)" ,  "i"  ) ,
		"bool" : novo  RegExp (  "^ (?:"  +  booleanos  +  ") $" ,  "i"  ) ,
		// Para uso em bibliotecas que implementam .is ()
		// Usamos isso para correspondência de PDV em `select`
		"needsContext" : new  RegExp (  "^"  +  espaço em branco  +  "* [> + ~] |: (par | ímpar | eq | gt | lt | enésimo | primeiro | último) (?: \\ ("  +
			espaço em branco  +  "* ((?: - \\ d)? \\ d *)"  +  espaço em branco  +  "* \\) |) (? = [^ -] | $)" ,  "i"  )
	} ,

	rinputs  =  / ^ (?: input | select | textarea | botão ) $ / i ,
	rheader  =  / ^ h \ d $ / i ,

	rnative  =  / ^ [ ^ { ] + \ { \ s * \ [ nativo \ w / ,

	// ID facilmente analisável / recuperável ou seletores de TAG ou CLASSE
	rquickExpr  =  / ^ (?: # ( [ \ w - ] + ) | ( \ w + ) | \. ( [ \ w - ] + ) ) $ / ,

	rsibling  =  / [ + ~ ] / ,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape  =  new  RegExp (  "\\\\ ([\\ da-f] {1,6}"  +  espaço em branco  +  "? | ("  +  espaço em branco  +  ") |.)" ,  "ig"  ) ,
	funescape  =  function (  _ ,  escaped ,  escapedWhitespace  )  {
		var  high  =  "0x"  +  escapou  -  0x10000 ;
		// NaN significa non-codepoint
		// Suporte: Firefox <24
		// Interpretação numérica errônea de solução alternativa de + "0x"
		retornar  alto  ! ==  alto  ||  escapedWhitespace ?
			escapou :
			alto  <  0 ?
				// BMP codepoint
				String . fromCharCode (  alta  +  0x10000  ) :
				// Ponto de código do plano suplementar (par substituto)
				String . fromCharCode (  alto  >>  10  |  0xD800 ,  alto  &  0x3FF  |  0xDC00  ) ;
	} ,

	// string CSS / serialização de identificador
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape  =  / ( [ \ 0 - \ x 1f \ x 7f ] | ^ -? \ d ) | ^ - $ | [ ^ \ 0 - \ x 1f \ x 7f- \ u FFFF \ w - ] / g ,
	fcssescape  =  function (  ch ,  asCodePoint  )  {
		if  (  asCodePoint  )  {

			// U + 0000 NULL torna-se U + FFFD REPLACEMENT CHARACTER
			if  (  ch  ===  "\ 0"  )  {
				return  "\ uFFFD" ;
			}

			// Caracteres de controle e (dependendo da posição) números são escapados como pontos de código
			return  ch . fatia (  0 ,  - 1  )  +  "\\"  +  ch . charCodeAt (  CH . comprimento  -  1  ) . toString (  16  )  +  "" ;
		}

		// Outros caracteres ASCII potencialmente especiais recebem escape de barra invertida
		return  "\\"  +  ch ;
	} ,

	// Usado para iframes
	// Veja setDocument ()
	// Remover o wrapper da função causa uma "Permissão Negada"
	// erro no IE
	unloadHandler  =  function ( )  {
		setDocument ( ) ;
	} ,

	disabledAncestor  =  addCombinator (
		função (  elem  )  {
			return  elem . disabled  ===  true  &&  ( "form"  no  elem  ||  "rótulo"  no  elem ) ;
		} ,
		{  dir : "parentNode" ,  próximo : "legend"  }
	) ;

// Otimize para push.apply (_, NodeList)
tente  {
	empurre . aplicar (
		( arr  =  slice . call (  preferredDoc . childNodes  ) ) ,
		preferidoDoc . childNodes
	) ;
	// Suporte: Android <4.0
	// Detecta push.apply com falha silenciosa
	arr [  preferredDoc . childNodes . comprimento  ] . nodeType ;
}  catch  (  e  )  {
	push  =  {  aplicar : arr . comprimento ?

		// Aproveite a fatia, se possível
		função (  destino ,  els  )  {
			push_native . aplicar (  alvo ,  fatia . chamada ( els )  ) ;
		} :

		// Suporte: IE <9
		// Caso contrário, anexe diretamente
		função (  destino ,  els  )  {
			var  j  =  alvo . comprimento ,
				i  =  0 ;
			// Não é possível confiar em NodeList.length
			while  (  ( destino [ j ++ ]  =  els [ i ++ ] )  )  { }
			alvo . comprimento  =  j  -  1 ;
		}
	} ;
}

função  Sizzle (  seletor ,  contexto ,  resultados ,  semente  )  {
	var  m ,  i ,  elem ,  nid ,  corresponder ,  grupos ,  novoSeletor ,
		newContext  =  contexto  &&  contexto . ownerDocument ,

		// nodeType é padronizado para 9, já que o contexto é padronizado para document
		nodeType  =  context ? contexto . nodeType : 9 ;

	resultados  =  resultados  ||  [ ] ;

	// Retorna antes das chamadas com seletor ou contexto inválido
	se  (  typeof  seletor  ! ==  "string"  ||  ! selector  ||
		nodeType  ! ==  1  &&  nodeType  ! ==  9  &&  nodeType  ! ==  11  )  {

		 resultados de retorno ;
	}

	// Tente atalho localizar operações (em oposição a filtros) em documentos HTML
	if  (  ! seed  )  {

		if  (  (  context ? context . ownerDocument  ||  context : preferredDoc  )  ! ==  document  )  {
			setDocument (  contexto  ) ;
		}
		contexto  =  contexto  ||  documento ;

		if  (  documentIsHTML  )  {

			// Se o seletor for suficientemente simples, tente usar um método DOM "get * By *"
			// (exceto o contexto DocumentFragment, onde os métodos não existem)
			if  (  nodeType  ! ==  11  &&  ( match  =  rquickExpr . exec (  selector  ) )  )  {

				// seletor de ID
				if  (  ( m  =  match [ 1 ] )  )  {

					// Contexto do documento
					if  (  nodeType  ===  9  )  {
						if  (  ( elem  =  context . getElementById (  m  ) )  )  {

							// Suporte: IE, Opera, Webkit
							// TODO: identificar versões
							// getElementById pode combinar elementos por nome em vez de ID
							if  (  elem . id  ===  m  )  {
								resultados . empurrar (  elem  ) ;
								 resultados de retorno ;
							}
						}  else  {
							 resultados de retorno ;
						}

					// Contexto do elemento
					}  else  {

						// Suporte: IE, Opera, Webkit
						// TODO: identificar versões
						// getElementById pode combinar elementos por nome em vez de ID
						if  (  newContext  &&  ( elem  =  newContext . getElementById (  m  ) )  &&
							contém (  contexto ,  elem  )  &&
							elem . id  ===  m  )  {

							resultados . empurrar (  elem  ) ;
							 resultados de retorno ;
						}
					}

				// Seletor de tipo
				}  else  if  (  match [ 2 ]  )  {
					empurre . aplicar (  resultados ,  contexto . getElementsByTagName (  seletor  )  ) ;
					 resultados de retorno ;

				// Class selector
				}  else  if  (  ( m  =  match [ 3 ] )  &&  support . getElementsByClassName  &&
					contexto . getElementsByClassName  )  {

					empurre . aplicar (  resultados ,  contexto . getElementsByClassName (  m  )  ) ;
					 resultados de retorno ;
				}
			}

			// Aproveite as vantagens de querySelectorAll
			if  (  suporte . qsa  &&
				! compilerCache [  selector  +  ""  ]  &&
				( ! rbuggyQSA  ||  ! rbuggyQSA . test (  seletor  ) )  )  {

				if  (  nodeType  ! ==  1  )  {
					newContext  =  contexto ;
					newSelector  =  selector ;

				// qSA olha fora do contexto do elemento, que não é o que queremos
				// Obrigado a Andrew Dupont por esta técnica alternativa
				// Suporte: IE <= 8
				// Exclua os elementos do objeto
				}  else  if  (  context . nodeName . toLowerCase ( )  ! ==  "object"  )  {

					// Capture o ID do contexto, configurando-o primeiro, se necessário
					if  (  ( nid  =  context . getAttribute (  "id"  ) )  )  {
						nid  =  nid . substituir (  rcssescape ,  fcssescape  ) ;
					}  else  {
						contexto . setAttribute (  "id" ,  ( nid  =  expando )  ) ;
					}

					// Prefixa cada seletor na lista
					grupos  =  tokenizar (  seletor  ) ;
					i  =  grupos . comprimento ;
					enquanto  (  i -  )  {
						grupos [ i ]  =  "#"  +  nid  +  ""  +  toSeletor (  grupos [ i ]  ) ;
					}
					newSelector  =  grupos . juntar (  ","  ) ;

					// Expanda o contexto para seletores irmãos
					newContext  =  rsibling . test (  seletor  )  &&  testContext (  context . parentNode  )  ||
						contexto ;
				}

				if  (  newSelector  )  {
					tente  {
						empurre . aplicar (  resultados ,
							newContext . querySelectorAll (  newSelector  )
						) ;
						 resultados de retorno ;
					}  catch  (  qsaError  )  {
					}  finalmente  {
						if  (  nid  ===  expando  )  {
							contexto . removeAttribute (  "id"  ) ;
						}
					}
				}
			}
		}
	}

	// Todos os outros
	return  select (  selector . replace (  rtrim ,  "$ 1"  ) ,  contexto ,  resultados ,  semente  ) ;
}

/ **
 * Crie caches de valor-chave de tamanho limitado
* @returns { function (string, object) } Retorna os dados do objeto após armazená-los em si mesmo com
 * nome da propriedade a string (com sufixo de espaço) e (se o cache for maior que Expr.cacheLength)
 * excluindo a entrada mais antiga
 * /
function  createCache ( )  {
	var  keys  =  [ ] ;

	 cache de função (  chave ,  valor  )  {
		// Use (tecla + "") para evitar a colisão com as propriedades do protótipo nativo (consulte a edição nº 157)
		if  (  keys . push (  key  +  ""  )  >  Expr . cacheLength  )  {
			// Mantém apenas as entradas mais recentes
			excluir  cache [  chaves . shift ( )  ] ;
		}
		retorno  ( cache [  chave  +  ""  ]  =  valor ) ;
	}
	 cache de retorno ;
}

/ **
 * Marque uma função para uso especial pelo Sizzle
* @param { Function } fn A função a ser marcada
 * /
function  markFunction (  fn  )  {
	fn [  expando  ]  =  verdadeiro ;
	return  fn ;
}

/ **
 * Suporte a testes usando um elemento
* @param { Function } fn Passou o elemento criado e retorna um resultado booleano
 * /
function  assert (  fn  )  {
	var  el  =  documento . createElement ( "fieldset" ) ;

	tente  {
		volte  ! ! fn (  el  ) ;
	}  catch  ( e )  {
		return  false ;
	}  finalmente  {
		// Remover de seu pai por padrão
		if  (  el . parentNode  )  {
			el . parentNode . removeChild (  el  ) ;
		}
		// libera memória no IE
		el  =  nulo ;
	}
}

/ **
 * Adiciona o mesmo manipulador para todos os atributos especificados
* @param { String } Attrs lista de atributos separados por pipe
* @param { Function } handler O método que será aplicado
 * /
function  addHandle (  attrs ,  handler  )  {
	var  arr  =  attrs . dividir ( "|" ) ,
		i  =  arr . comprimento ;

	enquanto  (  i -  )  {
		Expr . attrHandle [  arr [ i ]  ]  =  manipulador ;
	}
}

/ **
 * Verifica a ordem do documento de dois irmãos
* @param { Element } a
* @param { Element } b
* @returns { Number } Retorna menos que 0 se a preceder b, maior que 0 se a seguir b
 * /
function  siblingCheck (  a ,  b  )  {
	var  cur  =  b  &&  a ,
		diff  =  cur  &&  a . nodeType  ===  1  &&  b . nodeType  ===  1  &&
			a . sourceIndex  -  b . sourceIndex ;

	// Use o IE sourceIndex se estiver disponível em ambos os nós
	if  (  diff  )  {
		return  diff ;
	}

	// Verifique se b segue a
	if  (  cur  )  {
		while  (  ( cur  =  cur . nextSibling )  )  {
			if  (  cur  ===  b  )  {
				retorno  - 1 ;
			}
		}
	}

	retornar  um ? 1 : - 1 ;
}

/ **
 * Retorna uma função para usar em pseudos para tipos de entrada
* @param { String } tipo
 * /
function  createInputPseudo (  type  )  {
	 função de retorno (  elem  )  {
		var  name  =  elem . nodeName . toLowerCase ( ) ;
		return  name  ===  "input"  &&  elem . tipo  ===  tipo ;
	} ;
}

/ **
 * Retorna uma função para usar em pseudos para botões
* @param { String } tipo
 * /
function  createButtonPseudo (  type  )  {
	 função de retorno (  elem  )  {
		var  name  =  elem . nodeName . toLowerCase ( ) ;
		return  ( name  ===  "input"  ||  name  ===  "button" )  &&  elem . tipo  ===  tipo ;
	} ;
}

/ **
 * Retorna uma função para usar em pseudos para: ativado /: desativado
* @param { Boolean } disabled true para: disabled; falso para: ativado
 * /
function  createDisabledPseudo (  disabled  )  {

	// Conhecido: falsos positivos desativados: fieldset [desativado]> legenda: enésimo do tipo (n + 2): pode-desativar
	 função de retorno (  elem  )  {

		// Apenas certos elementos podem corresponder: ativado ou: desativado
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if  (  "forma"  em  elem  )  {

			// Verifique se há deficiência herdada em elementos relevantes não desativados:
			// * elementos associados a formulários listados em um fieldset desabilitado
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * elementos de opção em um optgroup desativado
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// Todos esses elementos têm uma propriedade "formulário".
			if  (  elem . parentNode  &&  elem . disabled  ===  false  )  {

				// Os elementos de opção diferem para um optgroup pai, se presente
				if  (  "rótulo"  no  elem  )  {
					if  (  "rótulo"  em  elem . parentNode  )  {
						return  elem . parentNode . desativado  ===  desativado ;
					}  else  {
						return  elem . desativado  ===  desativado ;
					}
				}

				// Suporte: IE 6 - 11
				// Use a propriedade de atalho isDisabled para verificar os ancestrais fieldset desativados
				return  elem . isDisabled  ===  disabled  ||

					// Onde não houver isDisabled, verifique manualmente
					/ * jshint -W018 * /
					elem . isDisabled  ! ==  ! desativado  &&
						disabledAncestor (  elem  )  ===  disabled ;
			}

			return  elem . desativado  ===  desativado ;

		// Tente separar os elementos que não podem ser desabilitados antes de confiar na propriedade desabilitada.
		// Algumas vítimas ficam presas em nossa rede (rótulo, legenda, menu, trilha), mas não deveria
		// ainda existe neles, quanto mais ter um valor booleano.
		}  else  if  (  "rótulo"  no  elem  )  {
			return  elem . desativado  ===  desativado ;
		}

		// Os elementos restantes não são: ativado nem: desativado
		return  false ;
	} ;
}

/ **
 * Retorna uma função para usar em pseudos para posições
* @param { Function } fn
 * /
function  createPositionalPseudo (  fn  )  {
	return  markFunction ( função (  argumento  )  {
		argumento  =  + argumento ;
		return  markFunction ( function (  seed ,  match  )  {
			var  j ,
				matchIndexes  =  fn (  [ ] ,  seed . length ,  argument  ) ,
				i  =  matchIndexes . comprimento ;

			// Corresponde aos elementos encontrados nos índices especificados
			enquanto  (  i -  )  {
				if  (  seed [  ( j  =  matchIndexes [ i ] )  ]  )  {
					semente [ j ]  =  ! ( corresponde a [ j ]  =  semente [ j ] ) ;
				}
			}
		} ) ;
	} ) ;
}

/ **
 * Verifica um nó para validade como um contexto Sizzle
* @param { Element | Object = } context
* @returns { Element | Object | Boolean } O nó de entrada se aceitável, caso contrário, um valor falso
 * /
function  testContext (  context  )  {
	 contexto de  retorno &&  tipo de  contexto . getElementsByTagName  ! ==  "undefined"  &&  context ;
}

// Expor vars de suporte por conveniência
suporte  =  Sizzle . suporte  =  { } ;

/ **
 * Detecta nós XML
* @param { Element | Object } elem Um elemento ou documento
* @returns { Boolean } True iff elem é um nó XML não HTML
 * /
isXML  =  Sizzle . isXML  =  function (  elem  )  {
	// documentElement é verificado para os casos em que ainda não existe
	// (como carregar iframes no IE - # 4833)
	var  documentElement  =  elem  &&  ( elem . ownerDocument  ||  elem ) . documentElement ;
	retornar  documentElement ? documentElement . nodeName  ! ==  "HTML" : false ;
} ;

/ **
 * Define as variáveis ​​relacionadas ao documento uma vez com base no documento atual
* @param { Element | Object } [doc] Um elemento ou objeto de documento a ser usado para definir o documento
* @returns { Object } Retorna o documento atual
 * /
setDocument  =  Sizzle . setDocument  =  function (  node  )  {
	var  hasCompare ,  subWindow ,
		doc  =  nó ? nó . ownerDocument  ||  nó : preferredDoc ;

	// Retorne mais cedo se o documento for inválido ou já estiver selecionado
	if  (  doc  ===  document  ||  doc . nodeType  ! ==  9  ||  ! doc . documentElement  )  {
		 documento de devolução ;
	}

	// Atualizar variáveis ​​globais
	documento  =  doc ;
	docElem  =  documento . documentElement ;
	documentIsHTML  =  ! isXML (  documento  ) ;

	// Suporte: IE 9-11, Edge
	// Acessar documentos iframe após descarregar gera erros de "permissão negada" (jQuery # 13936)
	if  (  preferredDoc  ! ==  document  &&
		( subWindow  =  document . defaultView )  &&  subWindow . top  ! ==  subWindow  )  {

		// Suporte: IE 11, Edge
		if  (  subWindow . addEventListener  )  {
			subWindow . addEventListener (  "unload" ,  unloadHandler ,  false  ) ;

		// Suporte: IE 9 - 10 apenas
		}  else  if  (  subWindow . attachEvent  )  {
			subWindow . attachEvent (  "onunload" ,  unloadHandler  ) ;
		}
	}

	/* Atributos
	-------------------------------------------------- -------------------- * /

	// Suporte: IE <8
	// Verifique se getAttribute realmente retorna atributos e não propriedades
	// (exceto booleanos do IE8)
	suporte . atributos  =  assert ( função (  el  )  {
		el . className  =  "i" ;
		volte  ! el . getAttribute ( "className" ) ;
	} ) ;

	/ * getElement (s) por *
	-------------------------------------------------- -------------------- * /

	// Verifique se getElementsByTagName ("*") retorna apenas elementos
	suporte . getElementsByTagName  =  assert ( function (  el  )  {
		el . appendChild (  document . createComment ( "" )  ) ;
		volte  ! el . getElementsByTagName ( "*" ) . comprimento ;
	} ) ;

	// Suporte: IE <9
	suporte . getElementsByClassName  =  rnative . teste (  documento . getElementsByClassName  ) ;

	// Suporte: IE <10
	// Verifique se getElementById retorna elementos por nome
	// Os métodos getElementById quebrados não selecionam nomes definidos programaticamente,
	// então, use um teste getElementsByName rotatório
	suporte . getById  =  assert ( function (  el  )  {
		docElem . appendChild (  el  ) . id  =  expando ;
		volte  ! documento . getElementsByName  ||  ! documento . getElementsByName (  expando  ) . comprimento ;
	} ) ;

	// Filtro de ID e encontrar
	if  (  suporte . getById  )  {
		Expr . filtro [ "ID" ]  =  função (  id  )  {
			var  attrId  =  id . substituir (  runescape ,  funescape  ) ;
			 função de retorno (  elem  )  {
				return  elem . getAttribute ( "id" )  ===  attrId ;
			} ;
		} ;
		Expr . find [ "ID" ]  =  função (  id ,  contexto  )  {
			if  (  typeof  context . getElementById  ! ==  "undefined"  &&  documentIsHTML  )  {
				var  elem  =  contexto . getElementById (  id  ) ;
				return  elem ? [  elem  ] : [ ] ;
			}
		} ;
	}  else  {
		Expr . filtro [ "ID" ]  =   função (  id  )  {
			var  attrId  =  id . substituir (  runescape ,  funescape  ) ;
			 função de retorno (  elem  )  {
				var  node  =  typeof  elem . getAttributeNode  ! ==  "undefined"  &&
					elem . getAttributeNode ( "id" ) ;
				return  node  &&  node . valor  ===  atributo ;
			} ;
		} ;

		// Suporte: IE 6 - 7 apenas
		// getElementById não é confiável como um atalho de localização
		Expr . find [ "ID" ]  =  função (  id ,  contexto  )  {
			if  (  typeof  context . getElementById  ! ==  "undefined"  &&  documentIsHTML  )  {
				 nó var ,  i ,  elems ,
					elem  =  contexto . getElementById (  id  ) ;

				if  (  elem  )  {

					// Verifique o atributo id
					nó  =  elem . getAttributeNode ( "id" ) ;
					if  (  nó  &&  nó . valor  ===  id  )  {
						return  [  elem  ] ;
					}

					// Retroceda em getElementsByName
					elems  =  contexto . getElementsByName (  id  ) ;
					i  =  0 ;
					while  (  ( elem  =  elems [ i ++ ] )  )  {
						nó  =  elem . getAttributeNode ( "id" ) ;
						if  (  nó  &&  nó . valor  ===  id  )  {
							return  [  elem  ] ;
						}
					}
				}

				return  [ ] ;
			}
		} ;
	}

	// Marcação
	Expr . encontre [ "TAG" ]  =  suporte . getElementsByTagName ?
		função (  tag ,  contexto  )  {
			if  (  typeof  context . getElementsByTagName  ! ==  "undefined"  )  {
				 contexto de retorno . getElementsByTagName (  tag  ) ;

			// Nós DocumentFragment não têm gEBTN
			}  else  if  (  support . qsa  )  {
				 contexto de retorno . querySelectorAll (  tag  ) ;
			}
		} :

		função (  tag ,  contexto  )  {
			var  elem ,
				tmp  =  [ ] ,
				i  =  0 ,
				// Por feliz coincidência, um gEBTN (quebrado) também aparece nos nós DocumentFragment
				resultados  =  contexto . getElementsByTagName (  tag  ) ;

			// Filtre comentários possíveis
			if  (  tag  ===  "*"  )  {
				while  (  ( elem  =  resultados [ i ++ ] )  )  {
					if  (  elem . nodeType  ===  1  )  {
						tmp . empurrar (  elem  ) ;
					}
				}

				return  tmp ;
			}
			 resultados de retorno ;
		} ;

	// Aula
	Expr . encontre [ "CLASSE" ]  =  suporte . getElementsByClassName  &&  function (  className ,  context  )  {
		if  (  typeof  context . getElementsByClassName  ! ==  "undefined"  &&  documentIsHTML  )  {
			 contexto de retorno . getElementsByClassName (  className  ) ;
		}
	} ;

	/ * QSA / MatchSelector
	-------------------------------------------------- -------------------- * /

	// QSA e suporte para MatchSelector

	// MatchSelector (: active) relata falso quando verdadeiro (IE9 / Opera 11.5)
	rbuggyMatches  =  [ ] ;

	// qSa (: focus) relata falso quando verdadeiro (Chrome 21)
	// Permitimos isso por causa de um bug no IE8 / 9 que gera um erro
	// sempre que `document.activeElement` é acessado em um iframe
	// Portanto, permitimos que: focus passe pelo QSA o tempo todo para evitar o erro do IE
	// Veja https://bugs.jquery.com/ticket/13378
	rbuggyQSA  =  [ ] ;

	if  (  ( support . qsa  =  rnative . test (  document . querySelectorAll  ) )  )  {
		// Construir QSA regex
		// Estratégia Regex adotada de Diego Perini
		assert ( função (  el  )  {
			// Select é definido como string vazia propositalmente
			// Isso é para testar o tratamento do IE de não explicitamente
			// definindo um atributo de conteúdo booleano,
			// já que sua presença deve ser suficiente
			// https://bugs.jquery.com/ticket/12359
			docElem . appendChild (  el  ) . innerHTML  =  "<a id='"  +  expando  +  "'> </a>"  +
				"<select id = '"  +  expando  +  "- \ r \\' msallowcapture = ''>"  +
				"<option selected = ''> </option> </select>" ;

			// Suporte: IE8, Opera 11-12.16
			// Nada deve ser selecionado quando strings vazias seguem ^ = ou $ = ou * =
			// O atributo de teste deve ser desconhecido no Opera, mas "seguro" para WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if  (  el . querySelectorAll ( "[msallowcapture ^ = '']" ) . length  )  {
				rbuggyQSA . push (  "[* ^ $] ="  +  espaço em branco  +  "* (?: '' | \" \ ")"  ) ;
			}

			// Suporte: IE8
			// Atributos booleanos e "valor" não são tratados corretamente
			if  (  ! el . querySelectorAll ( "[selected]" ) . length  )  {
				rbuggyQSA . push (  "\\ ["  +  espaço em branco  +  "* (?: valor |"  +  booleanos  +  ")"  ) ;
			}

			// Suporte: Chrome <29, Android <4.4, Safari <7.0+, iOS <7.0+, PhantomJS <1.9.8+
			if  (  ! el . querySelectorAll (  "[id ~ ="  +  expando  +  "-]"  ) . length  )  {
				rbuggyQSA . push ( "~ =" ) ;
			}

			// Webkit / Opera -: marcada deve retornar os elementos de opção selecionados
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 gera erro aqui e não verá testes posteriores
			if  (  ! el . querySelectorAll ( ": verificado" ) . length  )  {
				rbuggyQSA . push ( ": verificado" ) ;
			}

			// Suporte: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector # id sibling-combinator selector` falha
			if  (  ! el . querySelectorAll (  "a #"  +  expando  +  "+ *"  ) . length  )  {
				rbuggyQSA . push ( ". #. + [+ ~]" ) ;
			}
		} ) ;

		assert ( função (  el  )  {
			el . innerHTML  =  "<a href='' disabled='disabled'> </a>"  +
				"<select disabled = 'disabled'> <option /> </select>" ;

			// Suporte: Aplicativos nativos do Windows 8
			// Os atributos de tipo e nome são restritos durante a atribuição de .innerHTML
			var  input  =  document . createElement ( "input" ) ;
			entrada . setAttribute (  "tipo" ,  "oculto"  ) ;
			el . appendChild (  entrada  ) . setAttribute (  "nome" ,  "D"  ) ;

			// Suporte: IE8
			// Aplicar a diferenciação de maiúsculas e minúsculas do atributo name
			if  (  el . querySelectorAll ( "[name = d]" ) . length  )  {
				rbuggyQSA . push (  "nome"  +  espaço em branco  +  "* [* ^ $ |! ~]? ="  ) ;
			}

			// FF 3.5 -: habilitado /: desabilitado e elementos ocultos (elementos ocultos ainda estão habilitados)
			// IE8 gera erro aqui e não verá testes posteriores
			if  (  el . querySelectorAll ( ": enabled" ) . length  ! ==  2  )  {
				rbuggyQSA . push (  ": ativado" ,  ": desativado"  ) ;
			}

			// Suporte: IE9-11 +
			// IE's: o seletor desativado não pega os filhos de conjuntos de campos desativados
			docElem . appendChild (  el  ) . desativado  =  verdadeiro ;
			if  (  el . querySelectorAll ( ": disabled" ) . length  ! ==  2  )  {
				rbuggyQSA . push (  ": ativado" ,  ": desativado"  ) ;
			}

			// Opera 10-11 não lança pseudos inválidos pós-vírgula
			el . querySelectorAll ( "* ,: x" ) ;
			rbuggyQSA . push ( ",. *:" ) ;
		} ) ;
	}

	se  (  ( suporte . matchesSelector  =  rnative . teste (  ( fósforos  =  docElem . partidas  ||
		docElem . webkitMatchesSelector  ||
		docElem . mozMatchesSelector  ||
		docElem . oMatchesSelector  ||
		docElem . msMatchesSelector )  ) )  )  {

		assert ( função (  el  )  {
			// Verifique se é possível fazer matchSelector
			// em um nó desconectado (IE 9)
			suporte . desconectadoMatch  =  corresponde . chamar (  el ,  "*"  ) ;

			// Isso deve falhar com uma exceção
			// Gecko não dá erro, retorna falso em vez disso
			jogos . chamar (  el ,  "[s! = '']: x"  ) ;
			rbuggyMatches . push (  "! =" ,  pseudos  ) ;
		} ) ;
	}

	rbuggyQSA  =  rbuggyQSA . comprimento  &&  novo  RegExp (  rbuggyQSA . join ( "|" )  ) ;
	rbuggyMatches  =  rbuggyMatches . comprimento  &&  novo  RegExp (  rbuggyMatches . join ( "|" )  ) ;

	/ * Contém
	-------------------------------------------------- -------------------- * /
	hasCompare  =  rnative . teste (  docElem . compareDocumentPosition  ) ;

	// Elemento contém outro
	// Intencionalmente auto-exclusivo
	// Como em, um elemento não contém a si mesmo
	contém  =  hasCompare  ||  rnativo . teste (  docElem . contém  ) ?
		função (  a ,  b  )  {
			var  adown  =  a . nodeType  ===  9 ? a . documentElement : a ,
				bup  =  b  &&  b . parentNode ;
			return  a  ===  bup  ||  ! ! (  bup  &&  bup . nodeType  ===  1  &&  (
				adown . contém ?
					adown . contém (  bup  ) :
					a . compareDocumentPosition  &&  a . compareDocumentPosition (  bup  )  &  16
			) ) ;
		} :
		função (  a ,  b  )  {
			if  (  b  )  {
				while  (  ( b  =  b . parentNode )  )  {
					if  (  b  ===  a  )  {
						return  true ;
					}
				}
			}
			return  false ;
		} ;

	/* Ordenação
	-------------------------------------------------- -------------------- * /

	// Ordenação da ordem do documento
	sortOrder  =  hasCompare ?
	função (  a ,  b  )  {

		// Sinalizar para remoção duplicada
		if  (  a  ===  b  )  {
			hasDuplicate  =  true ;
			return  0 ;
		}

		// Classifica na existência do método se apenas uma entrada tiver compareDocumentPosition
		var  compare  =  ! a . compareDocumentPosition  -  ! b . compareDocumentPosition ;
		if  (  compare  )  {
			retornar  comparar ;
		}

		// Calcula a posição se ambas as entradas pertencem ao mesmo documento
		compare  =  (  a . ownerDocument  ||  a  )  ===  (  b . ownerDocument  ||  b  ) ?
			a . compareDocumentPosition (  b  ) :

			// Caso contrário, sabemos que eles estão desconectados
			1 ;

		// Nós desconectados
		if  (  compare  &  1  ||
			( ! support . sortDetached  &&  b . compareDocumentPosition (  a  )  ===  compare )  )  {

			// Escolha o primeiro elemento que está relacionado ao nosso documento preferido
			if  (  a  ===  documento  ||  a . ownerDocument  ===  preferredDoc  &&  contains ( preferredDoc ,  a )  )  {
				retorno  - 1 ;
			}
			if  (  b  ===  documento  ||  b . ownerDocument  ===  preferredDoc  &&  contains ( preferredDoc ,  b )  )  {
				return  1 ;
			}

			// Manter a ordem original
			return  sortInput ?
				(  indexOf (  sortInput ,  a  )  -  indexOf (  sortInput ,  b  )  ) :
				0 ;
		}

		retornar  comparar  &  4 ? - 1 : 1 ;
	} :
	função (  a ,  b  )  {
		// Saia mais cedo se os nós forem idênticos
		if  (  a  ===  b  )  {
			hasDuplicate  =  true ;
			return  0 ;
		}

		var  cur ,
			i  =  0 ,
			aup  =  a . parentNode ,
			bup  =  b . parentNode ,
			ap  =  [  a  ] ,
			bp  =  [  b  ] ;

		// Nós sem pais são documentos ou desconectados
		if  (  ! aup  ||  ! bup  )  {
			retornar  um  documento ===  ? - 1 :
				b  ===  documento ? 1 :
				aup ? - 1 :
				bup ? 1 :
				sortInput ?
				(  indexOf (  sortInput ,  a  )  -  indexOf (  sortInput ,  b  )  ) :
				0 ;

		// Se os nós forem irmãos, podemos fazer uma verificação rápida
		}  else  if  (  aup  ===  bup  )  {
			return  siblingCheck (  a ,  b  ) ;
		}

		// Caso contrário, precisamos de listas completas de seus ancestrais para comparação
		cur  =  a ;
		while  (  ( cur  =  cur . parentNode )  )  {
			ap . unshift (  cur  ) ;
		}
		cur  =  b ;
		while  (  ( cur  =  cur . parentNode )  )  {
			bp . unshift (  cur  ) ;
		}

		// Desça a árvore procurando por uma discrepância
		enquanto  (  ap [ i ]  ===  bp [ i ]  )  {
			i ++ ;
		}

		retorno  eu ?
			// Faça uma verificação de irmão se os nós têm um ancestral comum
			siblingCheck (  ap [ i ] ,  bp [ i ]  ) :

			// Caso contrário, os nós em nosso documento são classificados primeiro
			ap [ i ]  ===  preferredDoc ? - 1 :
			bp [ i ]  ===  preferredDoc ? 1 :
			0 ;
	} ;

	 documento de devolução ;
} ;

Sizzle . corresponde a  =  função (  expr ,  elementos  )  {
	retornar  Sizzle (  expr ,  nulo ,  nulo ,  elementos  ) ;
} ;

Sizzle . MatchSelector  =  function (  elem ,  expr  )  {
	// Definir vars do documento se necessário
	if  (  (  elem . ownerDocument  ||  elem  )  ! ==  document  )  {
		setDocument (  elem  ) ;
	}

	// Certifique-se de que os seletores de atributo estejam entre aspas
	expr  =  expr . substituir (  rattributeQuotes ,  "= '$ 1']"  ) ;

	if  (  suporte . MatchSelector  &&  documentIsHTML  &&
		! compilerCache [  expr  +  ""  ]  &&
		(  ! rbuggyMatches  ||  ! rbuggyMatches . test (  expr  )  )  &&
		(  ! rbuggyQSA      ||  ! rbuggyQSA . test (  expr  )  )  )  {

		tente  {
			var  ret  =  corresponde . chamar (  elem ,  expr  ) ;

			// MatchSelector do IE 9 retorna falso em nós desconectados
			if  (  ret  ||  support . desconectadoMatch  ||
					// Da mesma forma, nós desconectados são considerados em um documento
					// fragmento no IE 9
					elem . document  &&  elem . documento . nodeType  ! ==  11  )  {
				return  ret ;
			}
		}  catch  ( e )  { }
	}

	retornar  Sizzle (  expr ,  documento ,  nulo ,  [  elem  ]  ) . comprimento  >  0 ;
} ;

Sizzle . contém  =  função (  contexto ,  elem  )  {
	// Definir vars do documento se necessário
	if  (  (  context . ownerDocument  ||  context  )  ! ==  document  )  {
		setDocument (  contexto  ) ;
	}
	retorno  contém (  contexto ,  elem  ) ;
} ;

Sizzle . attr  =  função (  elem ,  nome  )  {
	// Definir vars do documento se necessário
	if  (  (  elem . ownerDocument  ||  elem  )  ! ==  document  )  {
		setDocument (  elem  ) ;
	}

	var  fn  =  Expr . attrHandle [  nome . toLowerCase ( )  ] ,
		// Não se deixe enganar por propriedades Object.prototype (jQuery # 13807)
		val  =  fn  &&  hasOwn . chamar (  Expr . attrHandle ,  nome . toLowerCase ( )  ) ?
			fn (  elem ,  nome ,  ! documentIsHTML  ) :
			indefinido ;

	return  val  ! ==  undefined ?
		val :
		suporte . atributos  ||  ! documentIsHTML ?
			elem . getAttribute (  name  ) :
			( val  =  elem . getAttributeNode ( nome ) )  &&  val . especificado ?
				val . valor :
				null ;
} ;

Sizzle . escape  =  function (  sel  )  {
	return  ( sel  +  "" ) . substituir (  rcssescape ,  fcssescape  ) ;
} ;

Sizzle . erro  =  função (  msg  )  {
	lançar  novo  Erro (  "Erro de sintaxe, expressão não reconhecida:"  +  msg  ) ;
} ;

/ **
 * Classificação de documentos e remoção de duplicatas
* @param { ArrayLike } resultados
 * /
Sizzle . uniqueSort  =  função (  resultados  )  {
	var  elem ,
		duplicados  =  [ ] ,
		j  =  0 ,
		i  =  0 ;

	// A menos que * saibamos *, podemos detectar duplicatas, assuma a presença delas
	hasDuplicate  =  ! suporte . detectDuplicates ;
	sortInput  =  ! suporte . sortStable  &&  results . fatia (  0  ) ;
	resultados . sort (  sortOrder  ) ;

	if  (  hasDuplicate  )  {
		while  (  ( elem  =  resultados [ i ++ ] )  )  {
			if  (  elem  ===  resultados [  i  ]  )  {
				j  =  duplicatas . empurrar (  i  ) ;
			}
		}
		enquanto  (  j -  )  {
			resultados . emenda (  duplicatas [  j  ] ,  1  ) ;
		}
	}

	// Limpe a entrada após a classificação para liberar objetos
	// Veja https://github.com/jquery/sizzle/pull/225
	sortInput  =  null ;

	 resultados de retorno ;
} ;

/ **
 * Função de utilidade para recuperar o valor de texto de uma matriz de nós DOM
* @param { Array | Elemento } elem
 * /
getText  =  Sizzle . getText  =  function (  elem  )  {
	 nó var ,
		ret  =  "" ,
		i  =  0 ,
		nodeType  =  elem . nodeType ;

	if  (  ! nodeType  )  {
		// Se nenhum nodeType, espera-se que seja uma matriz
		while  (  ( nó  =  elem [ i ++ ] )  )  {
			// Não atravesse os nós de comentários
			ret  + =  getText (  nó  ) ;
		}
	}  else  if  (  nodeType  ===  1  ||  nodeType  ===  9  ||  nodeType  ===  11  )  {
		// Use textContent para elementos
		// uso de innerText removido para consistência de novas linhas (jQuery # 11153)
		if  (  typeof  elem . textContent  ===  "string"  )  {
			return  elem . textContent ;
		}  else  {
			// Atravessar seus filhos
			para  (  elem  =  elem . primeiro filho ;  elem ;  elem  =  elem . próximo irmão  )  {
				ret  + =  obterTexto (  elem  ) ;
			}
		}
	}  else  if  (  nodeType  ===  3  ||  nodeType  ===  4  )  {
		return  elem . nodeValue ;
	}
	// Não inclua comentários ou nós de instrução de processamento

	return  ret ;
} ;

Expr  =  Sizzle . seletores  =  {

	// Pode ser ajustado pelo usuário
	cacheLength : 50 ,

	createPseudo : markFunction ,

	match : matchExpr ,

	attrHandle : { } ,

	encontrar : { } ,

	parente : {
		">" : {  dir : "parentNode" ,  primeiro : verdadeiro  } ,
		"" : {  dir : "parentNode"  } ,
		"+" : {  dir : "previousSibling" ,  first : true  } ,
		"~" : {  dir : "previousSibling"  }
	} ,

	preFilter : {
		"ATTR" : função (  correspondência  )  {
			correspondência [ 1 ]  =  correspondência [ 1 ] . substituir (  runescape ,  funescape  ) ;

			// Mova o valor fornecido para corresponder a [3] entre aspas
			correspondência [ 3 ]  =  (  correspondência [ 3 ]  ||  correspondência [ 4 ]  ||  correspondência [ 5 ]  ||  ""  ) . substituir (  runescape ,  funescape  ) ;

			if  (  corresponder [ 2 ]  ===  "~ ="  )  {
				correspondência [ 3 ]  =  ""  +  correspondência [ 3 ]  +  "" ;
			}

			 jogo de volta . fatia (  0 ,  4  ) ;
		} ,

		"CRIANÇA" : função (  correspondência  )  {
			/ * corresponde a matchExpr ["CHILD"]
				1 tipo (apenas | enésimo | ...)
				2 o quê (filho | do tipo)
				3 argumentos (par | ímpar | \ d * | \ d * n ([+ -] \ d +)? | ...)
				4 componente xn do argumento xn + y ([+ -]? \ D * n |)
				5 sinal do componente xn
				6 x do componente xn
				7 sinais do componente y
				8 y do componente y
			* /
			correspondência [ 1 ]  =  correspondência [ 1 ] . toLowerCase ( ) ;

			if  (  match [ 1 ] . slice (  0 ,  3  )  ===  "enésimo"  )  {
				// enésimo- * requer argumento
				if  (  ! match [ 3 ]  )  {
					Sizzle . erro (  correspondência [ 0 ]  ) ;
				}

				// parâmetros numéricos xey para Expr.filter.CHILD
				// lembre-se daquele elenco falso / verdadeiro respectivamente para 0/1
				correspondência [ 4 ]  =  + (  correspondência [ 4 ] ? correspondência [ 5 ]  +  ( correspondência [ 6 ]  ||  1 ) : 2  *  (  correspondência [ 3 ]  ===  "par"  ||  correspondência [ 3 ]  ===  " ímpar "  )  ) ;
				correspondência [ 5 ]  =  + (  (  correspondência [ 7 ]  +  correspondência [ 8 ]  )  ||  correspondência [ 3 ]  ===  "ímpar"  ) ;

			// outros tipos proíbem argumentos
			}  else  if  (  match [ 3 ]  )  {
				Sizzle . erro (  correspondência [ 0 ]  ) ;
			}

			 jogo de retorno ;
		} ,

		"PSEUDO" : função (  correspondência  )  {
			 excesso de var ,
				não cotado  =  ! combinar [ 6 ]  &&  combinar [ 2 ] ;

			if  (  matchExpr [ "CHILD" ] . test (  match [ 0 ]  )  )  {
				return  null ;
			}

			// Aceita argumentos citados como estão
			if  (  match [ 3 ]  )  {
				correspondência [ 2 ]  =  correspondência [ 4 ]  ||  combinar [ 5 ]  ||  "" ;

			// Retire o excesso de caracteres de argumentos não citados
			}  Else  se  (  sem aspas  &&  rpseudo . Teste (  sem aspas  )  &&
				// Obtenha o excesso do tokenize (recursivamente)
				( excesso  =  tokenizar (sem  aspas ,  verdadeiro  ) )  &&
				// avança para o próximo parêntese de fechamento
				( excesso  = sem  aspas . indexOf (  ")" , sem  aspas . comprimento  -  excesso  )  - sem  aspas . comprimento )  )  {

				// excesso é um índice negativo
				correspondência [ 0 ]  =  correspondência [ 0 ] . fatia (  0 ,  excesso  ) ;
				correspondência [ 2 ]  = sem  aspas . fatia (  0 ,  excesso  ) ;
			}

			// Retorna apenas as capturas necessárias para o método do pseudo-filtro (tipo e argumento)
			 jogo de volta . fatia (  0 ,  3  ) ;
		}
	} ,

	filtro : {

		"TAG" : função (  nodeNameSelector  )  {
			var  nodeName  =  nodeNameSelector . substituir (  runescape ,  funescape  ) . toLowerCase ( ) ;
			return  nodeNameSelector  ===  "*" ?
				function ( )  {  return  true ;  } :
				função (  elem  )  {
					return  elem . nodeName  &&  elem . nodeName . toLowerCase ( )  ===  nodeName ;
				} ;
		} ,

		"CLASS" : função (  className  )  {
			var  pattern  =  classCache [  className  +  ""  ] ;

			 padrão de  retorno ||
				( padrão  =  novo  RegExp (  "(^ |"  +  espaço em branco  +  ")"  + nome da  classe  +  "("  +  espaço em branco  +  "| $)"  ) )  &&
				classCache (  className ,  function (  elem  )  {
					 padrão de retorno . test (  typeof  elem . className  ===  "string"  &&  elem . className  ||  typeof  elem . getAttribute  ! ==  "undefined"  &&  elem . getAttribute ( "class" )  ||  ""  ) ;
				} ) ;
		} ,

		"ATTR" : função (  nome ,  operador ,  verificação  )  {
			 função de retorno (  elem  )  {
				 resultado  var =  Sizzle . attr (  elem ,  nome  ) ;

				if  (  resultado  ==  null  )  {
					 operador de  retorno ===  "! =" ;
				}
				if  (  ! operador  )  {
					return  true ;
				}

				resultado  + =  "" ;

				 operador de  retorno ===  "=" ? resultado  ===  verificar :
					operador  ===  "! =" ? resultado  ! ==  verificar :
					operador  ===  "^ =" ? verificar  &&  resultado . indexOf (  verificar  )  ===  0 :
					operador  ===  "* =" ? verificar  &&  resultado . indexOf (  verificar  )  >  - 1 :
					operador  ===  "$ =" ? verificar  &&  resultado . fatia (  - verificar . comprimento  )  ===  verificar :
					operador  ===  "~ =" ? (  ""  +  resultado . substituir (  rwhitespace ,  ""  )  +  ""  ) . indexOf (  verificar  )  >  - 1 :
					operador  ===  "| =" ? resultado  ===  verificar  ||  resultado . fatia (  0 ,  verificar . comprimento  +  1  )  ===  verificar  +  "-" :
					falso ;
			} ;
		} ,

		"CRIANÇA" : função (  tipo , o  quê ,  argumento ,  primeiro ,  último  )  {
			var  simple  =  type . fatia (  0 ,  3  )  ! ==  "enésimo" ,
				forward  =  type . fatia (  - 4  )  ! ==  "último" ,
				ofType  =  what  ===  "of-type" ;

			retornar  primeiro  ===  1  &&  último  ===  0 ?

				// Atalho para: enésimo - * (n)
				função (  elem  )  {
					volte  ! ! elem . parentNode ;
				} :

				função (  elem ,  contexto ,  xml  )  {
					var  cache ,  uniqueCache ,  outerCache ,  node ,  nodeIndex ,  start ,
						dir  =  simples  ! ==  para a frente ? "nextSibling" : "previousSibling" ,
						pai  =  elem . parentNode ,
						nome  =  ofType  &&  elem . nodeName . toLowerCase ( ) ,
						useCache  =  ! xml  &&  ! ofType ,
						diff  =  falso ;

					if  (  pai  )  {

						//: (primeiro | último | apenas) - (filho | do tipo)
						if  (  simples  )  {
							while  (  dir  )  {
								nó  =  elem ;
								while  (  ( nó  =  nó [  dir  ] )  )  {
									if  (  ofType ?
										nó . nodeName . toLowerCase ( )  ===  nome :
										nó . nodeType  ===  1  )  {

										return  false ;
									}
								}
								// Inverter direção para: only- * (se ainda não o tivermos feito)
								start  =  dir  =  type  ===  "apenas"  &&  ! iniciar  &&  "nextSibling" ;
							}
							return  true ;
						}

						start  =  [  avançar ? pai . firstChild : pai . lastChild  ] ;

						// non-xml: nth-child (...) armazena dados de cache no `pai`
						if  (  forward  &&  useCache  )  {

							// Buscar `elem` de um índice previamente armazenado em cache

							// ... de forma amigável ao gzip
							nó  =  pai ;
							outerCache  =  nó [  expando  ]  ||  ( nó [  expando  ]  =  { } ) ;

							// Suporte: apenas IE <9
							// Defenda-se contra Attroperties clonadas (jQuery gh-1709)
							uniqueCache  =  outerCache [  nó . UniqueID  ]  ||
								( outerCache [  nó . ID exclusivo  ]  =  { } ) ;

							cache  =  uniqueCache [  tipo  ]  ||  [ ] ;
							nodeIndex  =  cache [  0  ]  ===  dirruns  &&  cache [  1  ] ;
							diff  =  nodeIndex  &&  cache [  2  ] ;
							node  =  nodeIndex  &&  parent . childNodes [  nodeIndex  ] ;

							while  (  ( node  =  ++ nodeIndex  &&  node  &&  node [  dir  ]  ||

								// Retorno para buscar `elem` desde o início
								( diff  =  nodeIndex  =  0 )  ||  começar . pop ( ) )  )  {

								// Quando encontrado, os índices de cache em `pai` e quebram
								if  (  node . nodeType  ===  1  &&  ++ diff  &&  node  ===  elem  )  {
									uniqueCache [  tipo  ]  =  [  dirruns ,  nodeIndex ,  diff  ] ;
									pausa ;
								}
							}

						}  else  {
							// Use o índice do elemento previamente armazenado em cache, se disponível
							if  (  useCache  )  {
								// ... de forma amigável ao gzip
								nó  =  elem ;
								outerCache  =  nó [  expando  ]  ||  ( nó [  expando  ]  =  { } ) ;

								// Suporte: apenas IE <9
								// Defenda-se contra Attroperties clonadas (jQuery gh-1709)
								uniqueCache  =  outerCache [  nó . UniqueID  ]  ||
									( outerCache [  nó . ID exclusivo  ]  =  { } ) ;

								cache  =  uniqueCache [  tipo  ]  ||  [ ] ;
								nodeIndex  =  cache [  0  ]  ===  dirruns  &&  cache [  1  ] ;
								diff  =  nodeIndex ;
							}

							// xml: n-ésimo filho (...)
							// ou: enésimo último filho (...) ou: enésimo (último)? - do tipo (...)
							if  (  diff  ===  false  )  {
								// Use o mesmo loop acima para buscar `elem` desde o início
								while  (  ( node  =  ++ nodeIndex  &&  node  &&  node [  dir  ]  ||
									( diff  =  nodeIndex  =  0 )  ||  começar . pop ( ) )  )  {

									if  (  (  ofType ?
										nó . nodeName . toLowerCase ( )  ===  nome :
										nó . nodeType  ===  1  )  &&
										++ diff  )  {

										// Armazena em cache o índice de cada elemento encontrado
										if  (  useCache  )  {
											outerCache  =  nó [  expando  ]  ||  ( nó [  expando  ]  =  { } ) ;

											// Suporte: apenas IE <9
											// Defenda-se contra Attroperties clonadas (jQuery gh-1709)
											uniqueCache  =  outerCache [  nó . UniqueID  ]  ||
												( outerCache [  nó . ID exclusivo  ]  =  { } ) ;

											uniqueCache [  tipo  ]  =  [  dirruns ,  diff  ] ;
										}

										if  (  nó  ===  elem  )  {
											pausa ;
										}
									}
								}
							}
						}

						// Incorpore o deslocamento e verifique o tamanho do ciclo
						diff  - =  último ;
						retornar  diff  ===  primeiro  ||  (  diff  %  primeiro  ===  0  &&  diff  /  first  > =  0  ) ;
					}
				} ;
		} ,

		"PSEUDO" : função (  pseudo ,  argumento  )  {
			// nomes de pseudoclasse não diferenciam maiúsculas de minúsculas
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Priorizar diferenciando maiúsculas de minúsculas no caso de pseudos personalizados serem adicionados com letras maiúsculas
			// Lembre-se de que setFilters herda de pseudos
			var  args ,
				fn  =  Expr . pseudos [  pseudo  ]  ||  Expr . setFilters [  pseudo . toLowerCase ( )  ]  ||
					Sizzle . erro (  "pseudo não suportado:"  +  pseudo  ) ;

			// O usuário pode usar createPseudo para indicar que
			// argumentos são necessários para criar a função de filtro
			// assim como Sizzle faz
			if  (  fn [  expando  ]  )  {
				return  fn (  argumento  ) ;
			}

			// Mas mantenha o suporte para assinaturas antigas
			if  (  comprimento fn . > 1 ) {
				args  =  [  pseudo ,  pseudo ,  "" ,  argumento  ] ;
				return  Expr . setFilters . hasOwnProperty (  pseudo . toLowerCase ( )  ) ?
					markFunction ( function (  seed ,  match  )  {
						var  idx ,
							correspondido  =  fn (  semente ,  argumento  ) ,
							i  =  combinado . comprimento ;
						enquanto  (  i -  )  {
							idx  =  indexOf (  semente ,  correspondido [ i ]  ) ;
							semente [  idx  ]  =  ! (  corresponde a [  idx  ]  =  correspondido [ i ]  ) ;
						}
					} ) :
					função (  elem  )  {
						retornar  fn (  elem ,  0 ,  args  ) ;
					} ;
			}

			return  fn ;
		}
	} ,

	pseudos : {
		// Pseudos potencialmente complexos
		"não" : markFunction ( function (  selector  )  {
			// Corte o seletor passado para compilar
			// para evitar o tratamento à frente e atrás
			// espaços como combinadores
			var  input  =  [ ] ,
				resultados  =  [ ] ,
				matcher  =  compilar (  seletor . substituir (  rtrim ,  "$ 1"  )  ) ;

			return  matcher [  expando  ] ?
				markFunction ( função (  semente ,  correspondências ,  contexto ,  xml  )  {
					var  elem ,
						unmatched  =  matcher (  seed ,  null ,  xml ,  [ ]  ) ,
						i  =  semente . comprimento ;

					// Corresponde a elementos não correspondidos por `matcher`
					enquanto  (  i -  )  {
						if  (  ( elem  =  sem correspondência [ i ] )  )  {
							semente [ i ]  =  ! ( corresponde a [ i ]  =  elem ) ;
						}
					}
				} ) :
				função (  elem ,  contexto ,  xml  )  {
					entrada [ 0 ]  =  elem ;
					matcher (  entrada ,  nulo ,  xml ,  resultados  ) ;
					// Não guarde o elemento (edição # 299)
					entrada [ 0 ]  =  nulo ;
					volte  ! resultados . pop ( ) ;
				} ;
		} ) ,

		"tem" : markFunction ( function (  selector  )  {
			 função de retorno (  elem  )  {
				retorno  Sizzle (  seletor ,  elem  ) . comprimento  >  0 ;
			} ;
		} ) ,

		"contém" : markFunction ( function (  text  )  {
			texto  =  texto . substituir (  runescape ,  funescape  ) ;
			 função de retorno (  elem  )  {
				retorno  (  elem . textContent  ||  elem . innerText  ||  getText (  elem  )  ) . indexOf (  texto  )  >  - 1 ;
			} ;
		} ) ,

		// "Se um elemento é representado por um seletor: lang ()
		// é baseado unicamente no valor de linguagem do elemento
		// sendo igual ao identificador C,
		// ou começando com o identificador C seguido imediatamente por "-".
		// A correspondência de C com o valor de linguagem do elemento é realizada sem distinção entre maiúsculas e minúsculas.
		// O identificador C não precisa ser um nome de idioma válido. "
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang" : markFunction (  function (  lang  )  {
			// o valor lang deve ser um identificador válido
			if  (  ! ridentifier . test ( lang  ||  "" )  )  {
				Sizzle . erro (  "idioma não suportado:"  +  idioma  ) ;
			}
			lang  =  lang . substituir (  runescape ,  funescape  ) . toLowerCase ( ) ;
			 função de retorno (  elem  )  {
				var  elemLang ;
				faça  {
					if  (  ( elemLang  =  documentIsHTML ?
						elem . lang :
						elem . getAttribute ( "xml: lang" )  ||  elem . getAttribute ( "lang" ) )  )  {

						elemLang  =  elemLang . toLowerCase ( ) ;
						return  elemLang  ===  lang  ||  elemLang . indexOf (  lang  +  "-"  )  ===  0 ;
					}
				}  while  (  ( elem  =  elem . parentNode )  &&  elem . nodeType  ===  1  ) ;
				return  false ;
			} ;
		} ) ,

		// Diversos
		"destino" : função (  elem  )  {
			var  hash  =  janela . localização  &&  janela . localização . hash ;
			return  hash  &&  hash . fatia (  1  )  ===  elem . id ;
		} ,

		"root" : função (  elem  )  {
			return  elem  ===  docElem ;
		} ,

		"foco" : função (  elem  )  {
			return  elem  ===  documento . activeElement  &&  ( ! document . hasFocus  ||  document . hasFocus ( ) )  &&  ! ! ( elem . digite  ||  elem . href  ||  ~ elem . tabIndex ) ;
		} ,

		// propriedades booleanas
		"ativado" : createDisabledPseudo (  false  ) ,
		"disabled" : createDisabledPseudo (  true  ) ,

		"verificado" : função (  elem  )  {
			// Em CSS3,: check deve retornar os elementos selecionados e selecionados
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var  nodeName  =  elem . nodeName . toLowerCase ( ) ;
			retorno  ( nodeName  ===  "input"  &&  ! ! elem . verificadas )  ||  ( NodeName  ===  "opção"  &&  ! ! Elem . Selecionado ) ;
		} ,

		"selecionado" : função (  elem  )  {
			// Acessar esta propriedade torna selecionado por padrão
			// opções no Safari funcionam corretamente
			if  (  elem . parentNode  )  {
				elem . parentNode . selectedIndex ;
			}

			return  elem . selecionado  ===  verdadeiro ;
		} ,

		// Conteúdo
		"vazio" : função (  elem  )  {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			//: vazio é negado pelo elemento (1) ou nós de conteúdo (texto: 3; cdata: 4; entidade ref: 5),
			// mas não por outros (comentário: 8; instrução de processamento: 7; etc.)
			// nodeType <6 funciona porque os atributos (2) não aparecem como filhos
			para  (  elem  =  elem . primeiro filho ;  elem ;  elem  =  elem . próximo irmão  )  {
				if  (  elem . nodeType  <  6  )  {
					return  false ;
				}
			}
			return  true ;
		} ,

		"pai" : função (  elem  )  {
			volte  ! Expr . pseudos [ "vazio" ] (  elem  ) ;
		} ,

		// Tipos de elemento / entrada
		"cabeçalho" : função (  elem  )  {
			return  rheader . teste (  elem . nodeName  ) ;
		} ,

		"entrada" : função (  elem  )  {
			retornar  rinputs . teste (  elem . nodeName  ) ;
		} ,

		"botão" : função (  elem  )  {
			var  name  =  elem . nodeName . toLowerCase ( ) ;
			return  name  ===  "input"  &&  elem . digite  ===  "botão"  ||  nome  ===  "botão" ;
		} ,

		"texto" : função (  elem  )  {
			var  attr ;
			return  elem . nodeName . toLowerCase ( )  ===  "entrada"  &&
				elem . digite  ===  "texto"  &&

				// Suporte: IE <8
				// Novos valores de atributo HTML5 (por exemplo, "pesquisa") aparecem com elem.type === "texto"
				(  ( attr  =  elem . getAttribute ( "type" ) )  ==  null  ||  attr . toLowerCase ( )  ===  "text"  ) ;
		} ,

		// Posição na coleção
		"primeiro" : createPositionalPseudo ( function ( )  {
			return  [  0  ] ;
		} ) ,

		"último" : createPositionalPseudo ( function (  matchIndexes ,  length  )  {
			retorno  [  comprimento  -  1  ] ;
		} ) ,

		"eq" : createPositionalPseudo ( function (  matchIndexes ,  length ,  argument  )  {
			retornar  [  argumento  <  0 ? argumento  +  comprimento : argumento  ] ;
		} ) ,

		"even" : createPositionalPseudo ( function (  matchIndexes ,  length  )  {
			var  i  =  0 ;
			para  (  ;  i  <  comprimento ;  i  + =  2  )  {
				matchIndexes . empurrar (  i  ) ;
			}
			return  matchIndexes ;
		} ) ,

		"ímpar" : createPositionalPseudo ( function (  matchIndexes ,  length  )  {
			var  i  =  1 ;
			para  (  ;  i  <  comprimento ;  i  + =  2  )  {
				matchIndexes . empurrar (  i  ) ;
			}
			return  matchIndexes ;
		} ) ,

		"lt" : createPositionalPseudo ( function (  matchIndexes ,  length ,  argument  )  {
			var  i  =  argumento  <  0 ? argumento  +  comprimento : argumento ;
			para  (  ;  - i  > =  0 ;  )  {
				matchIndexes . empurrar (  i  ) ;
			}
			return  matchIndexes ;
		} ) ,

		"gt" : createPositionalPseudo ( function (  matchIndexes ,  length ,  argument  )  {
			var  i  =  argumento  <  0 ? argumento  +  comprimento : argumento ;
			para  (  ;  ++ i  <  comprimento ;  )  {
				matchIndexes . empurrar (  i  ) ;
			}
			return  matchIndexes ;
		} )
	}
} ;

Expr . pseudos [ "nth" ]  =  Expr . pseudos [ "eq" ] ;

// Adicionar botão / tipo de entrada pseudos
for  (  i  in  {  radio : true ,  checkbox : true ,  file : true ,  password : true ,  image : true  }  )  {
	Expr . pseudos [  i  ]  =  createInputPseudo (  i  ) ;
}
for  (  i  in  {  submit : true ,  reset : true  }  )  {
	Expr . pseudos [  i  ]  =  createButtonPseudo (  i  ) ;
}

// API fácil para criar novos setFilters
function  setFilters ( )  { }
setFilters . protótipo  =  Expr . filtros  =  Expr . pseudos ;
Expr . setFilters  =  new  setFilters ( ) ;

tokenize  =  Sizzle . tokenize  =  function (  selector ,  parseOnly  )  {
	var  correspondido ,  correspondência ,  tokens ,  tipo ,
		soFar ,  groups ,  preFilters ,
		cached  =  tokenCache [  seletor  +  ""  ] ;

	if  (em  cache  )  {
		return  parseOnly ? 0 : em cache . fatia (  0  ) ;
	}

	soFar  =  seletor ;
	grupos  =  [ ] ;
	preFilters  =  Expr . preFilter ;

	while  (  soFar  )  {

		// Vírgula e primeira execução
		if  (  ! correspondido  ||  ( match  =  rcomma . exec (  soFar  ) )  )  {
			if  (  match  )  {
				// Não consuma vírgulas finais como válidas
				soFar  =  soFar . fatia (  corresponder [ 0 ] . comprimento  )  ||  soFar ;
			}
			grupos . push (  ( tokens  =  [ ] )  ) ;
		}

		correspondido  =  falso ;

		// Combinators
		if  (  ( match  =  rcombinators . exec (  soFar  ) )  )  {
			correspondido  =  correspondência . shift ( ) ;
			tokens . push ( {
				valor : correspondido ,
				// Lança combinadores descendentes para o espaço
				tipo : match [ 0 ] . substituir (  rtrim ,  ""  )
			} ) ;
			soFar  =  soFar . fatia (  combinado . comprimento  ) ;
		}

		// Filtros
		para  (  tipo  em  Expr . filtro  )  {
			if  (  ( match  =  matchExpr [  type  ] . exec (  soFar  ) )  &&  ( ! preFilters [  type  ]  ||
				( match  =  preFilters [  type  ] (  match  ) ) )  )  {
				correspondido  =  correspondência . shift ( ) ;
				tokens . push ( {
					valor : correspondido ,
					tipo : tipo ,
					jogos : jogo
				} ) ;
				soFar  =  soFar . fatia (  combinado . comprimento  ) ;
			}
		}

		if  (  ! correspondido  )  {
			pausa ;
		}
	}

	// Retorna o comprimento do excesso inválido
	// se estamos apenas analisando
	// Caso contrário, lança um erro ou retorna tokens
	return  parseOnly ?
		soFar . comprimento :
		soFar ?
			Sizzle . erro (  seletor  ) :
			// Armazene os tokens em cache
			tokenCache (  seletor ,  grupos  ) . fatia (  0  ) ;
} ;

function  toSelector (  tokens  )  {
	var  i  =  0 ,
		len  =  tokens . comprimento ,
		seletor  =  "" ;
	para  (  ;  i  <  len ;  i ++  )  {
		seletor  + =  tokens [ i ] . valor ;
	}
	 seletor de retorno ;
}

function  addCombinator (  matcher ,  combinator ,  base  )  {
	var  dir  =  combinator . dir ,
		pular  =  combinador . a seguir ,
		chave  =  pular  ||  dir ,
		checkNonElements  =  base  &&  key  ===  "parentNode" ,
		doneName  =  done ++ ;

	 combinador de retorno . primeiro ?
		// Verifique o ancestral mais próximo / elemento anterior
		função (  elem ,  contexto ,  xml  )  {
			while  (  ( elem  =  elem [  dir  ] )  )  {
				if  (  elem . nodeType  ===  1  ||  checkNonElements  )  {
					return  matcher (  elem ,  contexto ,  xml  ) ;
				}
			}
			return  false ;
		} :

		// Verifique todos os elementos ancestrais / precedentes
		função (  elem ,  contexto ,  xml  )  {
			var  oldCache ,  uniqueCache ,  outerCache ,
				newCache  =  [  dirruns ,  doneName  ] ;

			// Não podemos definir dados arbitrários em nós XML, então eles não se beneficiam do armazenamento em cache do combinador
			if  (  xml  )  {
				while  (  ( elem  =  elem [  dir  ] )  )  {
					if  (  elem . nodeType  ===  1  ||  checkNonElements  )  {
						if  (  matcher (  elem ,  contexto ,  xml  )  )  {
							return  true ;
						}
					}
				}
			}  else  {
				while  (  ( elem  =  elem [  dir  ] )  )  {
					if  (  elem . nodeType  ===  1  ||  checkNonElements  )  {
						outerCache  =  elem [  expando  ]  ||  ( elem [  expando  ]  =  { } ) ;

						// Suporte: apenas IE <9
						// Defenda-se contra Attroperties clonadas (jQuery gh-1709)
						uniqueCache  =  outerCache [  elem . UniqueID  ]  ||  ( outerCache [  elem . UniqueID  ]  =  { } ) ;

						if  (  ignorar  &&  ignorar  ===  elem . nodeName . toLowerCase ( )  )  {
							elem  =  elem [  dir  ]  ||  elem ;
						}  else  if  (  ( oldCache  =  uniqueCache [  chave  ] )  &&
							oldCache [  0  ]  ===  dirruns  &&  oldCache [  1  ]  ===  doneName  )  {

							// Atribuir a newCache para que os resultados sejam propagados de volta para os elementos anteriores
							return  ( newCache [  2  ]  =  oldCache [  2  ] ) ;
						}  else  {
							// Reutilize o newcache para que os resultados sejam propagados de volta para os elementos anteriores
							uniqueCache [  chave  ]  =  newCache ;

							// Uma correspondência significa que terminamos; uma falha significa que temos que continuar verificando
							if  (  ( newCache [  2  ]  =  matcher (  elem ,  contexto ,  xml  ) )  )  {
								return  true ;
							}
						}
					}
				}
			}
			return  false ;
		} ;
}

function  elementMatcher (  matchers  )  {
	 matchers de retorno . comprimento  >  1 ?
		função (  elem ,  contexto ,  xml  )  {
			var  i  =  matchers . comprimento ;
			enquanto  (  i -  )  {
				if  (  ! matchers [ i ] (  elem ,  contexto ,  xml  )  )  {
					return  false ;
				}
			}
			return  true ;
		} :
		matchers [ 0 ] ;
}

function  multipleContexts (  seletor ,  contextos ,  resultados  )  {
	var  i  =  0 ,
		len  =  contextos . comprimento ;
	para  (  ;  i  <  len ;  i ++  )  {
		Sizzle (  seletor ,  contextos [ i ] ,  resultados  ) ;
	}
	 resultados de retorno ;
}

função  condensar (  sem correspondência ,  mapa ,  filtro ,  contexto ,  xml  )  {
	var  elem ,
		newUnmatched  =  [ ] ,
		i  =  0 ,
		len  =  incomparável . comprimento ,
		mapeado  =  mapa  ! =  nulo ;

	para  (  ;  i  <  len ;  i ++  )  {
		if  (  ( elem  =  sem correspondência [ i ] )  )  {
			if  (  ! filtro  ||  filtro (  elem ,  contexto ,  xml  )  )  {
				newUnmatched . empurrar (  elem  ) ;
				if  (  mapeado  )  {
					mapa . empurrar (  i  ) ;
				}
			}
		}
	}

	return  newUnmatched ;
}

function  setMatcher (  preFilter ,  selector ,  matcher ,  postFilter ,  postFinder ,  postSelector  )  {
	if  (  postFilter  &&  ! postFilter [  expando  ]  )  {
		postFilter  =  setMatcher (  postFilter  ) ;
	}
	if  (  postFinder  &&  ! postFinder [  expando  ]  )  {
		postFinder  =  setMatcher (  postFinder ,  postSelector  ) ;
	}
	return  markFunction ( function (  seed ,  results ,  context ,  xml  )  {
		var  temp ,  i ,  elem ,
			preMap  =  [ ] ,
			postMap  =  [ ] ,
			preexistente  =  resultados . comprimento ,

			// Obtenha os elementos iniciais da semente ou do contexto
			elems  =  semente  ||  multipleContexts (  selector  ||  "*" ,  context . nodeType ? [  context  ] : context ,  [ ]  ) ,

			// Pré-filtro para obter a entrada do matcher, preservando um mapa para a sincronização dos resultados iniciais
			matcherIn  =  preFilter  &&  (  seed  ||  ! selector  ) ?
				condensar (  elems ,  preMap ,  preFilter ,  contexto ,  xml  ) :
				elems ,

			matcherOut  =  matcher ?
				// Se tivermos um postFinder, ou semente filtrada, ou postFilter não semente ou resultados preexistentes,
				postFinder  ||  (  seed ? preFilter : preexisting  ||  postFilter  ) ?

					// ... o processamento intermediário é necessário
					[ ] :

					// ... caso contrário, use os resultados diretamente
					resultados :
				matcherIn ;

		// Encontre correspondências primárias
		if  (  matcher  )  {
			matcher (  matcherIn ,  matcherOut ,  contexto ,  xml  ) ;
		}

		// Aplicar postFilter
		if  (  postFilter  )  {
			temp  =  condensar (  matcherOut ,  postMap  ) ;
			postFilter (  temp ,  [ ] ,  contexto ,  xml  ) ;

			// Desfaça a correspondência de elementos com falha movendo-os de volta para matcherIn
			i  =  temp . comprimento ;
			enquanto  (  i -  )  {
				if  (  ( elem  =  temp [ i ] )  )  {
					matcherOut [  postMap [ i ]  ]  =  ! ( matcherIn [  postMap [ i ]  ]  =  elem ) ;
				}
			}
		}

		if  (  seed  )  {
			if  (  postFinder  ||  preFilter  )  {
				if  (  postFinder  )  {
					// Obtenha o matcherOut final condensando este intermediário em contextos postFinder
					temp  =  [ ] ;
					i  =  matcherOut . comprimento ;
					enquanto  (  i -  )  {
						if  (  ( elem  =  matcherOut [ i ] )  )  {
							// Restaura matcherIn visto que elem ainda não é uma partida final
							temp . push (  ( matcherIn [ i ]  =  elem )  ) ;
						}
					}
					postFinder (  nulo ,  ( matcherOut  =  [ ] ) ,  temp ,  xml  ) ;
				}

				// Mova os elementos correspondentes da semente aos resultados para mantê-los sincronizados
				i  =  matcherOut . comprimento ;
				enquanto  (  i -  )  {
					if  (  ( elem  =  matcherOut [ i ] )  &&
						( temp  =  postFinder ? indexOf (  seed ,  elem  ) : preMap [ i ] )  >  - 1  )  {

						semente [ temp ]  =  ! ( resultados [ temp ]  =  elem ) ;
					}
				}
			}

		// Adicionar elementos aos resultados, por meio de postFinder se definido
		}  else  {
			matcherOut  =  condensar (
				matcherOut  ===  resultados ?
					matcherOut . splice (  preexistente ,  comprimento matcherOut . ) :
					matcherOut
			) ;
			if  (  postFinder  )  {
				postFinder (  nulo ,  resultados ,  matcherOut ,  xml  ) ;
			}  else  {
				empurre . aplicar (  resultados ,  matcherOut  ) ;
			}
		}
	} ) ;
}

function  matcherFromTokens (  tokens  )  {
	var  checkContext ,  matcher ,  j ,
		len  =  tokens . comprimento ,
		leadRelative  =  Expr . relativo [  tokens [ 0 ] . tipo  ] ,
		implícitoRelativo  =  líderRelativo  ||  Expr . relativo [ "" ] ,
		i  =  líderRelativo ? 1 : 0 ,

		// O matcher básico garante que os elementos sejam alcançáveis ​​a partir do (s) contexto (s) de nível superior
		matchContext  =  addCombinator (  function (  elem  )  {
			return  elem  ===  checkContext ;
		} ,  implicitRelative ,  true  ) ,
		matchAnyContext  =  addCombinator (  function (  elem  )  {
			retornar  indexOf (  checkContext ,  elem  )  >  - 1 ;
		} ,  implicitRelative ,  true  ) ,
		matchers  =  [  função (  elem ,  contexto ,  xml  )  {
			var  ret  =  (  ! LeadRelative  &&  (  xml  ||  context  ! ==  outermostContext  )  )  ||  (
				( checkContext  =  contexto ) . nodeType ?
					matchContext (  elem ,  contexto ,  xml  ) :
					matchAnyContext (  elem ,  contexto ,  xml  )  ) ;
			// Evite pendurar no elemento (problema # 299)
			checkContext  =  null ;
			return  ret ;
		}  ] ;

	para  (  ;  i  <  len ;  i ++  )  {
		if  (  ( matcher  =  Expr . relative [  tokens [ i ] . type  ] )  )  {
			matchers  =  [  addCombinator ( elementMatcher (  matchers  ) ,  matcher )  ] ;
		}  else  {
			matcher  =  Expr . filtrar [  tokens [ i ] . tipo  ] . aplicar (  nulo ,  tokens [ i ] . corresponde  ) ;

			// Retorne especial ao ver uma correspondência posicional
			if  (  matcher [  expando  ]  )  {
				// Encontre o próximo operador relativo (se houver) para um tratamento adequado
				j  =  ++ i ;
				para  (  ;  j  <  len ;  j ++  )  {
					if  (  Expr . relativa [  tokens [ j ] . tipo  ]  )  {
						pausa ;
					}
				}
				return  setMatcher (
					i  >  1  &&  elementMatcher (  matchers  ) ,
					i  >  1  &&  toSelector (
						// Se o token anterior era um combinador descendente, insira um elemento qualquer implícito `*`
						tokens . fatia (  0 ,  i  -  1  ) . concat ( {  value : tokens [  i  -  2  ] . type  ===  "" ? "*" : ""  } )
					) . substituir (  rtrim ,  "$ 1"  ) ,
					matcher ,
					i  <  j  &&  matcherFromTokens (  tokens . slice (  i ,  j  )  ) ,
					j  <  len  &&  matcherFromTokens (  ( tokens  =  tokens . slice (  j  ) )  ) ,
					j  <  len  &&  toSelector (  tokens  )
				) ;
			}
			matchers . push (  matcher  ) ;
		}
	}

	return  elementMatcher (  matchers  ) ;
}

function  matcherFromGroupMatchers (  elementMatchers ,  setMatchers  )  {
	var  bySet  =  setMatchers . comprimento  >  0 ,
		byElement  =  elementMatchers . comprimento  >  0 ,
		superMatcher  =  function (  seed ,  context ,  xml ,  results ,  outermost  )  {
			var  elem ,  j ,  matcher ,
				matchedCount  =  0 ,
				i  =  "0" ,
				incomparável  =  semente  &&  [ ] ,
				setMatched  =  [ ] ,
				contextBackup  =  outermostContext ,
				// Devemos sempre ter elementos semente ou contexto externo
				elems  =  semente  ||  byElement  &&  Expr . encontre [ "TAG" ] (  "*" ,  externo  ) ,
				// Use dirruns inteiros iff este for o matcher mais externo
				dirrunsUnique  =  ( dirruns  + =  contextBackup  ==  null ? 1 : Math . random ( )  ||  0.1 ) ,
				len  =  elems . comprimento ;

			if  (  ultraperiféricas  )  {
				outermostContext  =  contexto  ===  documento  ||  contexto  ||  ultraperiféricas ;
			}

			// Adicionar elementos passando elementMatchers diretamente para os resultados
			// Suporte: IE <9, Safari
			// Tolerar propriedades de NodeList (IE: "comprimento"; Safari: <número>) combinando elementos por id
			for  (  ;  i  ! ==  len  &&  ( elem  =  elems [ i ] )  ! =  null ;  i ++  )  {
				if  (  byElement  &&  elem  )  {
					j  =  0 ;
					if  (  ! context  &&  elem . ownerDocument  ! ==  document  )  {
						setDocument (  elem  ) ;
						xml  =  ! documentIsHTML ;
					}
					while  (  ( matcher  =  elementMatchers [ j ++ ] )  )  {
						if  (  matcher (  elem ,  contexto  ||  documento ,  xml )  )  {
							resultados . empurrar (  elem  ) ;
							pausa ;
						}
					}
					if  (  ultraperiféricas  )  {
						dirruns  =  dirrunsUnique ;
					}
				}

				// Rastreia elementos incomparáveis ​​para filtros definidos
				if  (  bySet  )  {
					// Eles terão passado por todos os combinadores possíveis
					if  (  ( elem  =  ! matcher  &&  elem )  )  {
						matchedCount - ;
					}

					// Aumente o array para cada elemento, correspondido ou não
					if  (  seed  )  {
						incomparável . empurrar (  elem  ) ;
					}
				}
			}

			// `i` agora é a contagem de elementos visitados acima, e adicionando-o a` matchedCount`
			// torna o último não negativo.
			matchedCount  + =  i ;

			// Aplicar filtros definidos a elementos sem correspondência
			// NOTA: Isso pode ser ignorado se não houver elementos não correspondentes (ou seja, `matchedCount`
			// é igual a `i`), a menos que não tenhamos visitado _qualquer_ elementos no loop acima porque temos
			// sem correspondências de elemento e sem semente.
			// Incrementar uma string inicial "0" `i` permite que` i` permaneça uma string apenas naquele
			// caso, o que resultará em um "00" `matchedCount` que difere de` i`, mas também é
			// numericamente zero.
			if  (  bySet  &&  i  ! ==  matchedCount  )  {
				j  =  0 ;
				while  (  ( matcher  =  setMatchers [ j ++ ] )  )  {
					matcher (  sem correspondência ,  setMatched ,  contexto ,  xml  ) ;
				}

				if  (  seed  )  {
					// Reintegrar correspondências de elementos para eliminar a necessidade de classificação
					if  (  matchedCount  >  0  )  {
						enquanto  (  i -  )  {
							if  (  ! ( incomparável [ i ]  ||  setMatched [ i ] )  )  {
								setMatched [ i ]  =  pop . chamada (  resultados  ) ;
							}
						}
					}

					// Descarte os valores do marcador de posição do índice para obter apenas correspondências reais
					setMatched  =  condensar (  setMatched  ) ;
				}

				// Adicionar correspondências aos resultados
				empurre . aplicar (  resultados ,  setMatched  ) ;

				// Combinações de conjuntos sem sementes sucessivas a múltiplas combinações de sucesso estipulam classificação
				if  (  ultraperiféricas  &&  ! seed  &&  setMatched . length  >  0  &&
					(  matchedCount  +  setMatchers . length  )  >  1  )  {

					Sizzle . uniqueSort (  resultados  ) ;
				}
			}

			// Substitui a manipulação de globais por matchers aninhados
			if  (  ultraperiféricas  )  {
				dirruns  =  dirrunsUnique ;
				outermostContext  =  contextBackup ;
			}

			retornar  incomparável ;
		} ;

	retornar  bySet ?
		markFunction (  superMatcher  ) :
		superMatcher ;
}

compilar  =  Sizzle . compile  =  function (  selector ,  match  / * Uso interno apenas * /  )  {
	var  i ,
		setMatchers  =  [ ] ,
		elementMatchers  =  [ ] ,
		cached  =  compilerCache [  selector  +  ""  ] ;

	if  (  ! cached  )  {
		// Gere uma função de funções recursivas que podem ser usadas para verificar cada elemento
		if  (  ! match  )  {
			match  =  tokenize (  seletor  ) ;
		}
		i  =  combinar . comprimento ;
		enquanto  (  i -  )  {
			cached  =  matcherFromTokens (  match [ i ]  ) ;
			if  (em  cache [  expando  ]  )  {
				setMatchers . push (em  cache  ) ;
			}  else  {
				elementMatchers . push (em  cache  ) ;
			}
		}

		// Cache a função compilada
		cached  =  compilerCache (  selector ,  matcherFromGroupMatchers (  elementMatchers ,  setMatchers  )  ) ;

		// Salvar seletor e tokenização
		em cache . seletor  =  seletor ;
	}
	return  cached ;
} ;

/ **
 * Uma função de seleção de baixo nível que funciona com o compilado do Sizzle
 * funções do seletor
* @param { String | Function } seletor Um seletor ou um pré-compilado
 * função de seletor construída com Sizzle.compile
* @param { Element } context
* @param { Array } [resultados]
* @param { Array } [seed] Um conjunto de elementos para comparar
 * /
selecione  =  Sizzle . select  =  function (  seletor ,  contexto ,  resultados ,  semente  )  {
	var  i ,  tokens ,  token ,  tipo ,  encontrar ,
		compilado  =  typeof  selector  ===  "função"  &&  seletor ,
		correspondência  =  ! seed  &&  tokenize (  ( selector  =  compilado . selector  ||  selector )  ) ;

	resultados  =  resultados  ||  [ ] ;

	// Tente minimizar as operações se houver apenas um seletor na lista e nenhuma semente
	// (o último dos quais nos garante o contexto)
	if  (  match . length  ===  1  )  {

		// Reduza o contexto se o seletor de composto principal for um ID
		tokens  =  correspondência [ 0 ]  =  correspondência [ 0 ] . fatia (  0  ) ;
		if  (  tokens . length  >  2  &&  ( token  =  tokens [ 0 ] ) . type  ===  "ID"  &&
				contexto . nodeType  ===  9  &&  documentIsHTML  &&  Expr . relativo [  tokens [ 1 ] . tipo  ]  )  {

			context  =  (  Expr . find [ "ID" ] (  token . corresponde a [ 0 ] . replace ( runescape ,  funescape ) ,  context  )  ||  [ ]  ) [ 0 ] ;
			if  (  ! contexto  )  {
				 resultados de retorno ;

			// Matchers pré-compilados ainda verificarão ancestralidade, então suba um nível
			}  else  if  (  compilado  )  {
				contexto  =  contexto . parentNode ;
			}

			seletor  =  seletor . fatia (  tokens . shift ( ) . valor . comprimento  ) ;
		}

		// Buscar um conjunto de sementes para correspondência da direita para a esquerda
		i  =  matchExpr [ "needsContext" ] . teste (  seletor  ) ? 0 : tokens . comprimento ;
		enquanto  (  i -  )  {
			token  =  tokens [ i ] ;

			// Aborta se atingirmos um combinador
			if  (  Expr . relative [  ( type  =  token . type )  ]  )  {
				pausa ;
			}
			if  (  ( find  =  Expr . find [  type  ] )  )  {
				// Pesquisa, expandindo o contexto para os principais combinadores irmãos
				if  (  ( seed  =  find (
					token . corresponde a [ 0 ] . substituir (  runescape ,  funescape  ) ,
					rsibling . test (  tokens [ 0 ] . type  )  &&  testContext (  context . parentNode  )  ||  contexto
				) )  )  {

					// Se a semente estiver vazia ou nenhum token permanecer, podemos retornar mais cedo
					tokens . emenda (  i ,  1  ) ;
					seletor  =  semente . comprimento  &&  toSelector (  tokens  ) ;
					if  (  ! selector  )  {
						empurre . aplicar (  resultados ,  semente  ) ;
						 resultados de retorno ;
					}

					pausa ;
				}
			}
		}
	}

	// Compila e executa uma função de filtragem se nenhuma for fornecida
	// Fornece `match` para evitar a retokenização se modificarmos o seletor acima
	(  compilado  ||  compilar (  seletor ,  combinar  )  ) (
		semente ,
		contexto ,
		! documentIsHTML ,
		resultados ,
		! contexto  ||  rsibling . test (  seletor  )  &&  testContext (  context . parentNode  )  ||  contexto
	) ;
	 resultados de retorno ;
} ;

// Atribuições únicas

// Classificar estabilidade
suporte . sortStable  =  expando . dividir ( "" ) . sort (  sortOrder  ) . juntar ( "" )  ===  expando ;

// Suporte: Chrome 14-35 +
// Sempre assuma duplicatas se elas não forem passadas para a função de comparação
suporte . detectDuplicates  =  ! ! hasDuplicate ;

// Inicializa no documento padrão
setDocument ( ) ;

// Suporte: Webkit <537.32 - Safari 6.0.3 / Chrome 25 (corrigido no Chrome 27)
// Nós separados seguem confusamente * uns aos outros *
suporte . sortDetached  =  assert ( function (  el  )  {
	// Deve retornar 1, mas retorna 4 (seguinte)
	return  el . compareDocumentPosition (  document . createElement ( "fieldset" )  )  &  1 ;
} ) ;

// Suporte: IE <8
// Impedir atributo / propriedade "interpolação"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if  (  ! assert ( function (  el  )  {
	el . innerHTML  =  "<a href='#'> </a>" ;
	return  el . firstChild . getAttribute ( "href" )  ===  "#"  ;
} )  )  {
	addHandle (  "type | href | height | width" ,  function (  elem ,  name ,  isXML  )  {
		if  (  ! isXML  )  {
			return  elem . getAttribute (  nome ,  nome . toLowerCase ( )  ===  "tipo" ? 1 : 2  ) ;
		}
	} ) ;
}

// Suporte: IE <9
// Use defaultValue no lugar de getAttribute ("value")
if  (  ! suporte . atributos  ||  ! assert ( function (  el  )  {
	el . innerHTML  =  "<input />" ;
	el . firstChild . setAttribute (  "valor" ,  ""  ) ;
	return  el . firstChild . getAttribute (  "valor"  )  ===  "" ;
} )  )  {
	addHandle (  "valor" ,  função (  elem ,  nome ,  isXML  )  {
		if  (  ! isXML  &&  elem . nodeName . toLowerCase ( )  ===  "input"  )  {
			return  elem . defaultValue ;
		}
	} ) ;
}

// Suporte: IE <9
// Use getAttributeNode para buscar booleanos quando getAttribute estiver
if  (  ! assert ( function (  el  )  {
	return  el . getAttribute ( "disabled" )  ==  null ;
} )  )  {
	addHandle (  booleanos ,  função (  elem ,  nome ,  isXML  )  {
		var  val ;
		if  (  ! isXML  )  {
			return  elem [  nome  ]  ===  verdadeiro ? nome . toLowerCase ( ) :
					( val  =  elem . getAttributeNode (  nome  ) )  &&  val . especificado ?
					val . valor :
				null ;
		}
	} ) ;
}

retorno  Sizzle ;

} ) (  janela  ) ;



jQuery . encontrar  =  chiar ;
jQuery . expr  =  Sizzle . seletores ;

// Descontinuada
jQuery . expr [  ":"  ]  =  jQuery . expr . pseudos ;
jQuery . uniqueSort  =  jQuery . único  =  Sizzle . uniqueSort ;
jQuery . text  =  Sizzle . getText ;
jQuery . isXMLDoc  =  Sizzle . isXML ;
jQuery . contém  =  Sizzle . contém ;
jQuery . escapeSelector  =  Sizzle . escapar ;




var  dir  =  função (  elem ,  dir ,  até  )  {
	var  correspondido  =  [ ] ,
		truncar  =  até  ! ==  indefinido ;

	while  (  (  elem  =  elem [  dir  ]  )  &&  elem . nodeType  ! ==  9  )  {
		if  (  elem . nodeType  ===  1  )  {
			if  (  truncar  &&  jQuery (  elem  ) . is (  até  )  )  {
				pausa ;
			}
			combinado . empurrar (  elem  ) ;
		}
	}
	retorno  correspondido ;
} ;


var  irmãos  =  função (  n ,  elem  )  {
	var  correspondido  =  [ ] ;

	para  (  ;  n ;  n  =  n . próximo irmão  )  {
		if  (  n . nodeType  ===  1  &&  n  ! ==  elem  )  {
			combinado . push (  n  ) ;
		}
	}

	retorno  correspondido ;
} ;


var  rneedsContext  =  jQuery . expr . coincidir . needsContext ;



function  nodeName (  elem ,  nome  )  {

  return  elem . nodeName  &&  elem . nodeName . toLowerCase ( )  ===  nome . toLowerCase ( ) ;

} ;
var  rsingleTag  =  (  / ^ < ( [ az ] [ ^ \ / \ 0 >: \ x 20 \ t \ r \ n \ f ] * ) [ \ x 20 \ t \ r \ n \ f ] * \ / ? > (?: < \ / \ 1 > | ) $ / i  ) ;



var  risSimple  =  / ^ . [ ^: # \ [ \. , ] * $ / ;

// Implementar a funcionalidade idêntica para filtro e não
função  winnow (  elementos ,  qualificador ,  não  )  {
	if  (  jQuery . isFunction (  qualifier  )  )  {
		return  jQuery . grep (  elementos ,  função (  elem ,  i  )  {
			volte  ! ! qualificador . chamar (  elem ,  i ,  elem  )  ! ==  não ;
		}  ) ;
	}

	// Único elemento
	if  (  qualifier . nodeType  )  {
		return  jQuery . grep (  elementos ,  função (  elem  )  {
			return  (  elem  ===  qualifier  )  ! ==  not ;
		}  ) ;
	}

	// Arraylike de elementos (jQuery, argumentos, Array)
	if  (  qualificador typeof  ! == "string" ) {
		return  jQuery . grep (  elementos ,  função (  elem  )  {
			return  (  indexOf . call (  qualifier ,  elem  )  >  - 1  )  ! ==  not ;
		}  ) ;
	}

	// Seletor simples que pode ser filtrado diretamente, removendo não-elementos
	if  (  risSimple . test (  qualifier  )  )  {
		return  jQuery . filtro (  qualificador ,  elementos ,  não  ) ;
	}

	// Seletor complexo, compare os dois conjuntos, removendo não-elementos
	qualifier  =  jQuery . filtro (  qualificador ,  elementos  ) ;
	return  jQuery . grep (  elementos ,  função (  elem  )  {
		return  (  indexOf . call (  qualifier ,  elem  )  >  - 1  )  ! ==  not  &&  elem . nodeType  ===  1 ;
	}  ) ;
}

jQuery . filtro  =  função (  expr ,  elems ,  não  )  {
	var  elem  =  elems [  0  ] ;

	if  (  not  )  {
		expr  =  ": não ("  +  expr  +  ")" ;
	}

	if  (  elems . length  ===  1  &&  elem . nodeType  ===  1  )  {
		return  jQuery . encontrar . matchSelector (  elem ,  expr  ) ? [  elem  ] : [ ] ;
	}

	return  jQuery . encontrar . corresponde a (  expr ,  jQuery . grep (  elems ,  função (  elem  )  {
		return  elem . nodeType  ===  1 ;
	}  )  ) ;
} ;

jQuery . fn . extend (  {
	find : function (  selector  )  {
		var  i ,  ret ,
			len  =  isso . comprimento ,
			self  =  isso ;

		se  (  typeof  seletor  ! ==  "string"  )  {
			devolva  isso . pushStack (  jQuery (  seletor  ) . filter (  função ( )  {
				para  (  i  =  0 ;  i  <  len ;  i ++  )  {
					if  (  jQuery . contains (  self [  i  ] ,  this  )  )  {
						return  true ;
					}
				}
			}  )  ) ;
		}

		ret  =  isso . pushStack (  [ ]  ) ;

		para  (  i  =  0 ;  i  <  len ;  i ++  )  {
			jQuery . find (  seletor ,  self [  i  ] ,  ret  ) ;
		}

		return  len  >  1 ? jQuery . UniqueSort (  ret  ) : ret ;
	} ,
	filtro : função (  seletor  )  {
		devolva  isso . pushStack (  winnow (  this ,  seletor  ||  [ ] ,  false  )  ) ;
	} ,
	not : function (  selector  )  {
		devolva  isso . pushStack (  winnow (  this ,  seletor  ||  [ ] ,  true  )  ) ;
	} ,
	é : função (  seletor  )  {
		volte  ! ! joeirar (
			isso ,

			// Se este for um seletor posicional / relativo, verifique a associação no conjunto retornado
			// então $ ("p: primeiro"). is ("p: último") não retornará verdadeiro para um documento com dois "p".
			 seletor  typeof ===  "string"  &&  rneedsContext . teste (  seletor  ) ?
				jQuery (  seletor  ) :
				seletor  ||  [ ] ,
			falso
		) . comprimento ;
	}
}  ) ;


// Inicializa um objeto jQuery


// Uma referência central para o jQuery raiz (documento)
var  rootjQuery ,

	// Uma maneira simples de verificar strings HTML
	// Priorize #id sobre <tag> para evitar XSS via location.hash (# 9521)
	// Reconhecimento de HTML estrito (# 11290: deve começar com <)
	// Atalho #id case simples para velocidade
	rquickExpr  =  / ^ (?: \ s * ( < [ \ w \ W ] + > ) [ ^> ] * | # ( [ \ w - ] + ) ) $ / ,

	init  =  jQuery . fn . init  =  função (  seletor ,  contexto ,  raiz  )  {
		var  match ,  elem ;

		// ALÇA: $ (""), $ (nulo), $ (indefinido), $ (falso)
		if  (  ! selector  )  {
			devolva  isso ;
		}

		// O método init () aceita um rootjQuery alternativo
		// então a migração pode suportar jQuery.sub (gh-2101)
		root  =  root  ||  rootjQuery ;

		// Manipular strings HTML
		se  (  typeof  selector  ===  "string"  )  {
			if  (  seletor [  0  ]  ===  "<"  &&
				seletor [  seletor . comprimento  -  1  ]  ===  ">"  &&
				seletor . comprimento  > =  3  )  {

				// Suponha que as strings que começam e terminam com <> são HTML e ignoram a verificação do regex
				correspondência  =  [  nulo ,  seletor ,  nulo  ] ;

			}  else  {
				match  =  rquickExpr . exec (  seletor  ) ;
			}

			// Corresponda html ou certifique-se de que nenhum contexto seja especificado para #id
			if  (  match  &&  (  match [  1  ]  ||  ! contexto  )  )  {

				// HANDLE: $ (html) -> $ (array)
				if  (  match [  1  ]  )  {
					context  =  context  instanceof  jQuery ? contexto [  0  ] : contexto ;

					// A opção de executar scripts é verdadeira para back-compat
					// Deixar intencionalmente o erro ser lançado se parseHTML não estiver presente
					jQuery . merge (  this ,  jQuery . parseHTML (
						partida [  1  ] ,
						contexto  &&  contexto . nodeType ? contexto . ownerDocument  ||  contexto : documento ,
						verdadeiro
					)  ) ;

					// HANDLE: $ (html, props)
					if  (  rsingleTag . test (  match [  1  ]  )  &&  jQuery . isPlainObject (  contexto  )  )  {
						para  (  corresponder  no  contexto  )  {

							// As propriedades do contexto são chamadas como métodos, se possível
							if  (  jQuery . isFunction (  this [  match  ]  )  )  {
								esta [  correspondência  ] (  contexto [  correspondência  ]  ) ;

							// ... e de outra forma definido como atributos
							}  else  {
								isso . attr (  correspondência ,  contexto [  correspondência  ]  ) ;
							}
						}
					}

					devolva  isso ;

				// ALÇA: $ (# id)
				}  else  {
					elem  =  documento . getElementById (  match [  2  ]  ) ;

					if  (  elem  )  {

						// Injetar o elemento diretamente no objeto jQuery
						este [  0  ]  =  elem ;
						isso . comprimento  =  1 ;
					}
					devolva  isso ;
				}

			// ALÇA: $ (expr, $ (...))
			}  else  if  (  ! context  ||  context . jquery  )  {
				retorno  (  contexto  ||  raiz  ) . find (  seletor  ) ;

			// HANDLE: $ (expr, contexto)
			// (que é apenas equivalente a: $ (contexto). encontrar (expr)
			}  else  {
				devolva  isso . construtor (  contexto  ) . find (  seletor  ) ;
			}

		// HANDLE: $ (DOMElement)
		}  else  if  (  selector . nodeType  )  {
			este [  0  ]  =  seletor ;
			isso . comprimento  =  1 ;
			devolva  isso ;

		// HANDLE: $ (função)
		// Atalho para documento pronto
		}  else  if  (  jQuery . isFunction (  selector  )  )  {
			return  root . pronto  ! ==  indefinido ?
				root . pronto (  seletor  ) :

				// Execute imediatamente se pronto não estiver presente
				seletor (  jQuery  ) ;
		}

		return  jQuery . makeArray (  seletor ,  este  ) ;
	} ;

// Dê à função init o protótipo jQuery para instanciação posterior
init . protótipo  =  jQuery . fn ;

// Inicializa a referência central
rootjQuery  =  jQuery (  documento  ) ;


var  rparentsprev  =  / ^ (?: pais | prev (?: Até | Todos ) ) / ,

	// Métodos garantidos para produzir um conjunto único ao iniciar de um conjunto único
	GuaranteedUnique  =  {
		filhos : verdade ,
		conteúdo : verdadeiro ,
		próximo : verdadeiro ,
		prev : true
	} ;

jQuery . fn . extend (  {
	tem : função (  destino  )  {
		var  targets  =  jQuery (  target ,  this  ) ,
			l  =  alvos . comprimento ;

		devolva  isso . filtro (  função ( )  {
			var  i  =  0 ;
			para  (  ;  i  <  l ;  i ++  )  {
				if  (  jQuery . contains (  this ,  targets [  i  ]  )  )  {
					return  true ;
				}
			}
		}  ) ;
	} ,

	mais próximo : função (  seletores ,  contexto  )  {
		var  cur ,
			i  =  0 ,
			l  =  isso . comprimento ,
			correspondido  =  [ ] ,
			metas  =  typeof  seletores  ! ==  "string"  &&  jQuery (  seletores  ) ;

		// Os seletores posicionais nunca combinam, uma vez que não há contexto _selection_
		if  (  ! rneedsContext . test (  seletores  )  )  {
			para  (  ;  i  <  l ;  i ++  )  {
				for  (  cur  =  this [  i  ] ;  cur  &&  cur  ! ==  context ;  cur  =  cur . parentNode  )  {

					// Sempre pule fragmentos de documentos
					if  (  cur . nodeType  <  11  &&  (  alvos ?
						alvos . índice (  cur  )  >  - 1 :

						// Não passe não elementos para Sizzle
						cur . nodeType  ===  1  &&
							jQuery . encontrar . MatchSelector (  cur ,  seletores  )  )  )  {

						combinado . empurrar (  cur  ) ;
						pausa ;
					}
				}
			}
		}

		devolva  isso . pushStack (  correspondido . comprimento  >  1 ? jQuery . uniqueSort (  correspondido  ) : correspondido  ) ;
	} ,

	// Determine a posição de um elemento dentro do conjunto
	índice : função (  elem  )  {

		// Sem argumento, retorna o índice no pai
		if  (  ! elem  )  {
			return  (  this [  0  ]  &&  this [  0  ] . parentNode  ) ? isso . primeiro ( ) . prevAll ( ) . comprimento : - 1 ;
		}

		// Índice no seletor
		if  (  typeof  elem  ===  "string"  )  {
			return  indexOf . chamar (  jQuery (  elem  ) ,  this [  0  ]  ) ;
		}

		// Localize a posição do elemento desejado
		return  indexOf . chamar (  isto ,

			// Se receber um objeto jQuery, o primeiro elemento é usado
			elem . jquery ? elem [  0  ] : elem
		) ;
	} ,

	add : function (  selector ,  context  )  {
		devolva  isso . pushStack (
			jQuery . uniqueSort (
				jQuery . mesclar (  this . get ( ) ,  jQuery (  seletor ,  contexto  )  )
			)
		) ;
	} ,

	addBack : function (  selector  )  {
		devolva  isso . add (  seletor  ==  null ?
			isso . prevObject : isso . prevObject . filtro (  seletor  )
		) ;
	}
}  ) ;

 irmão função (  cur ,  dir  )  {
	while  (  (  cur  =  cur [  dir  ]  )  &&  cur . nodeType  ! ==  1  )  { }
	return  cur ;
}

jQuery . cada (  {
	pai : função (  elem  )  {
		var  parent  =  elem . parentNode ;
		return  parent  &&  parent . nodeType  ! ==  11 ? pai : nulo ;
	} ,
	pais : função (  elem  )  {
		return  dir (  elem ,  "parentNode"  ) ;
	} ,
	pais até : função (  elem ,  i ,  até  )  {
		return  dir (  elem ,  "parentNode" ,  até  ) ;
	} ,
	próximo : função (  elem  )  {
		return  sibling (  elem ,  "nextSibling"  ) ;
	} ,
	prev : função (  elem  )  {
		return  sibling (  elem ,  "previousSibling"  ) ;
	} ,
	nextAll : function (  elem  )  {
		return  dir (  elem ,  "nextSibling"  ) ;
	} ,
	prevAll : function (  elem  )  {
		return  dir (  elem ,  "previousSibling"  ) ;
	} ,
	próximoAté : função (  elem ,  i ,  até  )  {
		return  dir (  elem ,  "nextSibling" ,  até  ) ;
	} ,
	prevUntil : function (  elem ,  i ,  until  )  {
		return  dir (  elem ,  "previousSibling" ,  até  ) ;
	} ,
	irmãos : função (  elem  )  {
		retornar  irmãos (  (  elem . parentNode  ||  { }  ) . firstChild ,  elem  ) ;
	} ,
	filhos : função (  elem  )  {
		retornar  irmãos (  elem . firstChild  ) ;
	} ,
	conteúdo : função (  elem  )  {
        if  (  nodeName (  elem ,  "iframe"  )  )  {
            return  elem . contentDocument ;
        }

        // Suporte: apenas IE 9-11, apenas iOS 7, navegador Android <= 4.3 apenas
        // Trate o elemento do template como regular em navegadores que
        // não suporta isso.
        if  (  nodeName (  elem ,  "template"  )  )  {
            elem  =  elem . conteúdo  ||  elem ;
        }

        return  jQuery . mesclar (  [ ] ,  elem . childNodes  ) ;
	}
} ,  função (  nome ,  fn  )  {
	jQuery . fn [  nome  ]  =  função (  até ,  seletor  )  {
		var  correspondido  =  jQuery . mapa (  este ,  fn ,  até  ) ;

		if  (  name . slice (  - 5  )  ! ==  "Até"  )  {
			seletor  =  até ;
		}

		if  (  seletor  &&  typeof  selector  ===  "string"  )  {
			correspondido  =  jQuery . filtro (  seletor ,  combinado  ) ;
		}

		if  (  this . length  >  1  )  {

			// Remover duplicatas
			if  (  ! GuaranteedUnique [  nome  ]  )  {
				jQuery . uniqueSort (  combinado  ) ;
			}

			// Ordem reversa para pais * e derivados anteriores
			if  (  rparentsprev . teste (  nome  )  )  {
				combinado . reverso ( ) ;
			}
		}

		devolva  isso . pushStack (  combinado  ) ;
	} ;
}  ) ;
var  rnothtmlwhite  =  (  / [ ^ \ x 20 \ t \ r \ n \ f ] + / g  ) ;



// Converter opções formatadas em String em opções formatadas em Objeto
function  createOptions (  options  )  {
	var  object  =  { } ;
	jQuery . each (  options . match (  rnothtmlwhite  )  ||  [ ] ,  function (  _ ,  flag  )  {
		objeto [  sinalizador  ]  =  verdadeiro ;
	}  ) ;
	 objeto de retorno ;
}

/ *
 * Crie uma lista de retorno de chamada usando os seguintes parâmetros:
 *
 * options: uma lista opcional de opções separadas por espaço que mudará como
 * a lista de retorno de chamada se comporta ou um objeto de opção mais tradicional
 *
 * Por padrão, uma lista de retorno de chamada agirá como uma lista de retorno de chamada de evento e pode ser
 * "disparado" várias vezes.
 *
 * Opções possíveis:
 *
 * uma vez: irá garantir que a lista de retorno de chamada só possa ser disparada uma vez (como um Adiado)
 *
 * memória: manterá o controle dos valores anteriores e chamará qualquer retorno de chamada adicionado
 * depois que a lista foi disparada imediatamente com o último "memorizado"
 * valores (como Adiado)
 *
 * exclusivo: garantirá que um retorno de chamada só possa ser adicionado uma vez (sem duplicatas na lista)
 *
 * stopOnFalse: interrompe chamadas quando um retorno de chamada retorna falso
 *
 * /
jQuery . Retornos de chamada  =  função (  opções  )  {

	// Converta as opções de formatado em String para formatado em Objeto, se necessário
	// (verificamos o cache primeiro)
	options  =  typeof  options  ===  "string" ?
		createOptions (  opções  ) :
		jQuery . extender (  { } ,  opções  ) ;

	var  // Sinalizar para saber se a lista está disparando no momento
		disparando ,

		// Último valor de disparo para listas não esquecíveis
		memória ,

		// Sinalize para saber se a lista já foi disparada
		despedido ,

		// Sinalize para evitar disparos
		trancado ,

		// Lista real de retorno de chamada
		lista  =  [ ] ,

		// Fila de dados de execução para listas repetíveis
		fila  =  [ ] ,

		// Índice do retorno de chamada atualmente disparado (modificado por adicionar / remover conforme necessário)
		firingIndex  =  - 1 ,

		// Fire callbacks
		fogo  =  função ( )  {

			// Aplicar disparo único
			bloqueado  =  bloqueado  ||  opções . uma vez ;

			// Execute callbacks para todas as execuções pendentes,
			// respeitando as substituições firingIndex e as mudanças de tempo de execução
			disparado  =  disparado  =  verdadeiro ;
			para  (  ;  fila . comprimento ;  firingIndex  =  - 1  )  {
				memória  =  fila . shift ( ) ;
				while  (  ++ firingIndex  <  list . length  )  {

					// Execute o retorno de chamada e verifique o encerramento antecipado
					if  (  list [  firingIndex  ] . apply (  memory [  0  ] ,  memory [  1  ]  )  ===  false  &&
						opções . stopOnFalse  )  {

						// Pule para o fim e esqueça os dados para que .add não seja disparado novamente
						firingIndex  =  list . comprimento ;
						memória  =  falso ;
					}
				}
			}

			// Esqueça os dados se terminarmos com eles
			if  (  ! opções . memória  )  {
				memória  =  falso ;
			}

			disparo  =  falso ;

			// Limpe se terminarmos de atirar para sempre
			if  (  bloqueado  )  {

				// Mantenha uma lista vazia se tivermos dados para chamadas de adição futuras
				if  (  memória  )  {
					lista  =  [ ] ;

				// Caso contrário, este objeto é gasto
				}  else  {
					lista  =  "" ;
				}
			}
		} ,

		// Objeto de callbacks reais
		self  =  {

			// Adicione um retorno de chamada ou uma coleção de retornos de chamada à lista
			add : function ( )  {
				if  (  lista  )  {

					// Se tivermos memória de uma execução anterior, devemos disparar após adicionar
					if  (  memória  &&  ! disparo  )  {
						firingIndex  =  list . comprimento  -  1 ;
						fila . push (  memória  ) ;
					}

					(  função  add (  args  )  {
						jQuery . each (  args ,  function (  _ ,  arg  )  {
							if  (  jQuery . isFunction (  arg  )  )  {
								if  (  ! options . unique  ||  ! self . has (  arg  )  )  {
									lista . push (  arg  ) ;
								}
							}  else  if  (  arg  &&  arg . length  &&  jQuery . type (  arg  )  ! ==  "string"  )  {

								// Inspecione recursivamente
								add (  arg  ) ;
							}
						}  ) ;
					}  ) (  argumentos  ) ;

					if  (  memória  &&  ! disparo  )  {
						fogo ( ) ;
					}
				}
				devolva  isso ;
			} ,

			// Remova um retorno de chamada da lista
			remove : function ( )  {
				jQuery . cada (  argumentos ,  função (  _ ,  arg  )  {
					 índice var ;
					while  (  (  index  =  jQuery . inArray (  arg ,  list ,  index  )  )  >  - 1  )  {
						lista . emenda (  índice ,  1  ) ;

						// Lidar com índices de disparo
						if  (  index  <=  firingIndex  )  {
							firingIndex - ;
						}
					}
				}  ) ;
				devolva  isso ;
			} ,

			// Verifique se um determinado retorno de chamada está na lista.
			// Se nenhum argumento for fornecido, retorna se a lista tem callbacks anexados ou não.
			has : function (  fn  )  {
				retornar  fn ?
					jQuery . inArray (  fn ,  list  )  >  - 1 :
					lista . comprimento  >  0 ;
			} ,

			// Remova todos os retornos de chamada da lista
			vazio : function ( )  {
				if  (  lista  )  {
					lista  =  [ ] ;
				}
				devolva  isso ;
			} ,

			// Desativar .fire e .add
			// Aborta quaisquer execuções atuais / pendentes
			// Limpa todos os retornos de chamada e valores
			desativar : função ( )  {
				bloqueado  =  fila  =  [ ] ;
				lista  =  memória  =  "" ;
				devolva  isso ;
			} ,
			disabled : function ( )  {
				volte  ! lista ;
			} ,

			// Desativar .fire
			// Também desative .add, a menos que tenhamos memória (uma vez que não teria efeito)
			// Aborta todas as execuções pendentes
			lock : function ( )  {
				bloqueado  =  fila  =  [ ] ;
				if  (  ! memória  &&  ! disparo  )  {
					lista  =  memória  =  "" ;
				}
				devolva  isso ;
			} ,
			bloqueado : função ( )  {
				volte  ! ! bloqueado ;
			} ,

			// Chame todos os retornos de chamada com o contexto e os argumentos fornecidos
			fireWith : function (  context ,  args  )  {
				if  (  ! bloqueado  )  {
					args  =  args  ||  [ ] ;
					args  =  [  contexto ,  args . fatia ? args . fatia ( ) : args  ] ;
					fila . push (  args  ) ;
					if  (  ! disparando  )  {
						fogo ( ) ;
					}
				}
				devolva  isso ;
			} ,

			// Chame todos os callbacks com os argumentos fornecidos
			fogo : função ( )  {
				eu . fireWith (  this ,  argumentos  ) ;
				devolva  isso ;
			} ,

			// Para saber se os callbacks já foram chamados pelo menos uma vez
			disparado : function ( )  {
				volte  ! ! despedido ;
			}
		} ;

	retornar a  si mesmo ;
} ;


função  Identidade (  v  )  {
	return  v ;
}
function  Thrower (  ex  )  {
	jogue  ex ;
}

function  adoptValue (  valor ,  resolver ,  rejeitar ,  noValue  )  {
	 método var ;

	tente  {

		// Verifique o aspecto da promessa primeiro para privilegiar o comportamento síncrono
		if  (  valor  &&  jQuery . isFunction (  (  método  =  valor . promessa  )  )  )  {
			método . chamada (  valor  ) . feito (  resolver  ) . falhar (  rejeitar  ) ;

		// Outros então
		}  else  if  (  value  &&  jQuery . isFunction (  (  method  =  value . then  )  )  )  {
			método . ligar (  valor ,  resolver ,  rejeitar  ) ;

		// Outros não-tenáveis
		}  else  {

			// Controle os argumentos `resolver` permitindo que Array # slice converta o booleano` noValue` em um inteiro:
			// * falso: [valor] .slice (0) => resolver (valor)
			// * verdadeiro: [valor] .slice (1) => resolve ()
			resolver . aplicar (  indefinido ,  [  valor  ] . fatia (  noValue  )  ) ;
		}

	// Para Promises / A +, converta exceções em rejeições
	// Uma vez que jQuery.when não desembrulhará então, podemos pular as verificações extras que aparecem
	// Adiado # então para suprimir condicionalmente a rejeição.
	}  catch  (  value  )  {

		// Suporte: apenas Android 4.0
		// Funções de modo estrito invocadas sem .call / .apply obter contexto de objeto global
		rejeitar . aplicar (  indefinido ,  [  valor  ]  ) ;
	}
}

jQuery . extend (  {

	Adiado : function (  func  )  {
		var  tuples  =  [

				// ação, adicionar ouvinte, retornos de chamada,
				// ... .então manipuladores, índice de argumento, [estado final]
				[  "notificar" ,  "progresso" ,  jQuery . Callbacks (  "memória"  ) ,
					jQuery . Chamadas de retorno (  "memória"  ) ,  2  ] ,
				[  "resolver" ,  "pronto" ,  jQuery . Callbacks (  "uma vez na memória"  ) ,
					jQuery . Retornos de chamada (  "uma vez na memória"  ) ,  0 ,  "resolvido"  ] ,
				[  "rejeitar" ,  "falhar" ,  jQuery . Callbacks (  "uma vez na memória"  ) ,
					jQuery . Retornos de chamada (  "uma vez na memória"  ) ,  1 ,  "rejeitado"  ]
			] ,
			estado  =  "pendente" ,
			promessa  =  {
				state : function ( )  {
					 estado de retorno ;
				} ,
				sempre : function ( )  {
					diferido . feito (  argumentos  ) . falha (  argumentos  ) ;
					devolva  isso ;
				} ,
				"catch" : function (  fn  )  {
					 promessa de retorno . então (  nulo ,  fn  ) ;
				} ,

				// Manter o tubo para back-compat
				pipe : function (  / * fnDone, fnFail, fnProgress * /  )  {
					var  fns  =  argumentos ;

					return  jQuery . Diferida (  função (  newDefer  )  {
						jQuery . cada (  tuplas ,  função (  i ,  tupla  )  {

							// Mapeia tuplas (progresso, concluído, falha) para argumentos (concluído, falha, progresso)
							var  fn  =  jQuery . isFunction (  fns [  tupla [  4  ]  ]  )  &&  fns [  tupla [  4  ]  ] ;

							// deferred.progress (function () {vincular a newDefer ou newDefer.notify})
							// deferred.done (function () {vincular a newDefer ou newDefer.resolve})
							// deferred.fail (function () {vincular a newDefer ou newDefer.reject})
							diferido [  tupla [  1  ]  ] (  função ( )  {
								var  retornou  =  fn  &&  fn . aplicar (  isto ,  argumentos  ) ;
								if  (  retornou  &&  jQuery . isFunction (  retornou . promessa  )  )  {
									voltou . promessa ( )
										. progresso (  novoDefer . notificar  )
										. feito (  novoDefer . resolver  )
										. falha (  novoDefer . rejeitar  ) ;
								}  else  {
									newDefer [  tuple [  0  ]  +  "Com"  ] (
										isso ,
										fn ? [  retornou  ] : argumentos
									) ;
								}
							}  ) ;
						}  ) ;
						fns  =  nulo ;
					}  ) . promessa ( ) ;
				} ,
				então : function (  onFulfilled ,  onRejected ,  onProgress  )  {
					var  maxDepth  =  0 ;
					função  resolver (  profundidade ,  diferido ,  manipulador ,  especial  )  {
						return  function ( )  {
							var  that  =  this ,
								args  =  argumentos ,
								mayThrow  =  function ( )  {
									var  voltou ,  então ;

									// Suporte: Promessas / A + seção 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignora tentativas de resolução dupla
									if  (  profundidade  <  maxDepth  )  {
										retorno ;
									}

									retornado  =  manipulador . aplicar (  que ,  args  ) ;

									// Suporte: Promessas / A + seção 2.3.1
									// https://promisesaplus.com/#point-48
									if  (  retornou  ===  diferido . promessa ( )  )  {
										lance  novo  TypeError (  "Thenable self-resolution"  ) ;
									}

									// Suporte: Promessas / A + seções 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Recupere `then` apenas uma vez
									então  =  retornou  &&

										// Suporte: Promessas / A + seção 2.3.4
										// https://promisesaplus.com/#point-64
										// Verifique apenas objetos e funções para sua capacidade
										(  typeof  retornou  ===  "objeto"  ||
											typeof  retornou  ===  "função"  )  &&
										voltou . então ;

									// Lidar com um thenable retornado
									if  (  jQuery . isFunction (  then  )  )  {

										// Processadores especiais (notificar) apenas aguardem a resolução
										if  (  especial  )  {
											então . chamar (
												voltou ,
												resolver (  maxDepth ,  diferido ,  identidade ,  especial  ) ,
												resolver (  maxDepth ,  diferido ,  lançador ,  especial  )
											) ;

										// Processadores normais (resolver) também entram em progresso
										}  else  {

											// ... e desconsiderar os valores de resolução mais antigos
											maxDepth ++ ;

											então . chamar (
												voltou ,
												resolver (  maxDepth ,  diferido ,  identidade ,  especial  ) ,
												resolver (  maxDepth ,  diferido ,  Lançador ,  especial  ) ,
												resolver (  maxDepth ,  diferido ,  identidade ,
													diferido . notificar com  )
											) ;
										}

									// Lida com todos os outros valores retornados
									}  else  {

										// Apenas manipuladores substitutos passam o contexto
										// e vários valores (comportamento não específico)
										if  (  handler  ! ==  Identity  )  {
											que  =  indefinido ;
											args  =  [  retornado  ] ;
										}

										// Processa o (s) valor (es)
										// O processo padrão é resolvido
										(  especial  ||  diferido . resolveWith  ) (  that ,  args  ) ;
									}
								} ,

								// Apenas processadores normais (resolvem) capturam e rejeitam exceções
								processo  =  especial ?
									mayThrow :
									function ( )  {
										tente  {
											mayThrow ( ) ;
										}  catch  (  e  )  {

											if  (  jQuery . Deferred . exceptionHook  )  {
												jQuery . Adiado . exceptionHook (  e ,
													processo . stackTrace  ) ;
											}

											// Suporte: Promessas / A + seção 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignorar exceções de pós-resolução
											if  (  profundidade  +  1  > =  maxDepth  )  {

												// Apenas manipuladores substitutos passam o contexto
												// e vários valores (comportamento não específico)
												if  (  manipulador  ! ==  Lançador  )  {
													que  =  indefinido ;
													args  =  [  e  ] ;
												}

												diferido . rejeitarWith (  that ,  args  ) ;
											}
										}
									} ;

							// Suporte: Promessas / A + seção 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Resolva as promessas imediatamente para evitar a falsa rejeição de
							// erros subsequentes
							if  (  profundidade  )  {
								processo ( ) ;
							}  else  {

								// Chame um gancho opcional para registrar a pilha, em caso de exceção
								// já que, de outra forma, é perdido quando a execução fica assíncrona
								if  (  jQuery . Deferred . getStackHook  )  {
									processo . stackTrace  =  jQuery . Adiado . getStackHook ( ) ;
								}
								janela . setTimeout (  processo  ) ;
							}
						} ;
					}

					return  jQuery . Diferida (  função (  newDefer  )  {

						// progress_handlers.add (...)
						tuplas [  0  ] [  3  ] . adicionar (
							resolver (
								0 ,
								newDefer ,
								jQuery . isFunction (  onProgress  ) ?
									onProgress :
									Identidade ,
								newDefer . notificar com
							)
						) ;

						// preenchido_handlers.add (...)
						tuplas [  1  ] [  3  ] . adicionar (
							resolver (
								0 ,
								newDefer ,
								jQuery . isFunction (  onFulfilled  ) ?
									onFulfilled :
									Identidade
							)
						) ;

						// rejeitado manipuladores.add (...)
						tuplas [  2  ] [  3  ] . adicionar (
							resolver (
								0 ,
								newDefer ,
								jQuery . isFunction (  onRejected  ) ?
									onRejected :
									Atirador
							)
						) ;
					}  ) . promessa ( ) ;
				} ,

				// Faça uma promessa por este adiado
				// Se obj for fornecido, o aspecto da promessa é adicionado ao objeto
				promessa : função (  obj  )  {
					return  obj  ! =  null ? jQuery . extender (  obj ,  promessa  ) : promessa ;
				}
			} ,
			diferido  =  { } ;

		// Adicionar métodos específicos de lista
		jQuery . cada (  tuplas ,  função (  i ,  tupla  )  {
			var  list  =  tuple [  2  ] ,
				stateString  =  tuple [  5  ] ;

			// promessa.progress = list.add
			// promessa.done = list.add
			// promessa.fail = list.add
			promessa [  tupla [  1  ]  ]  =  lista . adicionar ;

			// Handle state
			if  (  stateString  )  {
				lista . adicionar (
					function ( )  {

						// estado = "resolvido" (ou seja, cumprido)
						// estado = "rejeitado"
						state  =  stateString ;
					} ,

					// rejeitado_callbacks.disable
					// cumprido_callbacks.disable
					tuplas [  3  -  i  ] [  2  ] . desabilitar ,

					// progress_callbacks.lock
					tuplas [  0  ] [  2  ] . trancar
				) ;
			}

			// progress_handlers.fire
			// cumprido_handlers.fire
			// rejeitado_handlers.fire
			lista . adicionar (  tupla [  3  ] . fogo  ) ;

			// deferred.notify = function () {deferred.notifyWith (...)}
			// deferred.resolve = function () {deferred.resolveWith (...)}
			// deferred.reject = function () {deferred.rejectWith (...)}
			diferido [  tupla [  0  ]  ]  =  função ( )  {
				diferido [  tupla [  0  ]  +  "Com"  ] (  isto  ===  diferido ? indefinido : isto ,  argumentos  ) ;
				devolva  isso ;
			} ;

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			diferido [  tupla [  0  ]  +  "Com"  ]  =  lista . fireWith ;
		}  ) ;

		// Faça ao adiado uma promessa
		promessa . promessa (  diferida  ) ;

		// Chame a função dada, se houver
		if  (  func  )  {
			func . chamada (  adiada ,  adiada  ) ;
		}

		// Tudo feito!
		retorno  adiado ;
	} ,

	// Auxiliar adiado
	quando : function (  singleValue  )  {
		var

			// contagem de subordinados incompletos
			restantes  =  argumentos . comprimento ,

			// contagem de argumentos não processados
			i  =  restante ,

			// dados de cumprimento subordinados
			resolveContexts  =  Array (  i  ) ,
			resolveValues  =  slice . chamar (  argumentos  ) ,

			// o mestre diferido
			master  =  jQuery . Adiado ( ) ,

			// fábrica de retorno de chamada subordinada
			updateFunc  =  function (  i  )  {
				 função de retorno (  valor  )  {
					resolveContexts [  i  ]  =  isso ;
					resolveValues [  i  ]  =  argumentos . comprimento  >  1 ? fatia . chamada (  argumentos  ) : valor ;
					if  (  ! (  - restante  )  )  {
						mestre . resolveWith (  resolveContexts ,  resolveValues  ) ;
					}
				} ;
			} ;

		// Argumentos simples e vazios são adotados como Promise.resolve
		if  (  restante  <=  1  )  {
			adoptValue (  singleValue ,  master . done (  updateFunc (  i  )  ) . resolve ,  master . rejeitar ,
				! restante  ) ;

			// Use .then () para desembrulhar thenables secundários (cf. gh-3000)
			if  (  master . state ( )  ===  "pendente"  ||
				jQuery . isFunction (  resolveValues [  i  ]  &&  resolveValues [  i  ] . then  )  )  {

				 mestre de retorno . então ( ) ;
			}
		}

		// Vários argumentos são agregados como elementos da matriz Promise.all
		enquanto  (  i -  )  {
			adoptValue (  resolveValues [  i  ] ,  updateFunc (  i  ) ,  mestre . rejeitar  ) ;
		}

		 mestre de retorno . promessa ( ) ;
	}
}  ) ;


// Isso geralmente indica um erro do programador durante o desenvolvimento,
// avisa sobre eles o mais rápido possível, em vez de engoli-los por padrão.
var  rerrorNames  =  / ^ ( Eval | Interno | Intervalo | Referência | Sintaxe | Tipo | URI ) Erro $ / ;

jQuery . Adiado . exceptionHook  =  função (  erro ,  pilha  )  {

	// Suporte: IE 8 - 9 apenas
	// O console existe quando as ferramentas de desenvolvimento estão abertas, o que pode acontecer a qualquer momento
	if  (  window . console  &&  window . console . warn  &&  error  &&  rerrorNames . test (  error . name  )  )  {
		janela . console . warn (  "exceção jQuery.Deferred:"  +  erro . mensagem ,  erro . pilha ,  pilha  ) ;
	}
} ;




jQuery . readyException  =  function (  error  )  {
	janela . setTimeout (  function ( )  {
		 erro de lançamento ;
	}  ) ;
} ;




// O adiado usado no DOM pronto
var  readyList  =  jQuery . Adiado ( ) ;

jQuery . fn . pronto  =  função (  fn  )  {

	readyList
		. então (  fn  )

		// Envolva jQuery.readyException em uma função para que a pesquisa
		// acontece no momento do tratamento do erro em vez do retorno de chamada
		// cadastro.
		. catch (  função (  erro  )  {
			jQuery . readyException (  erro  ) ;
		}  ) ;

	devolva  isso ;
} ;

jQuery . extend (  {

	// O DOM está pronto para ser usado? Defina como verdadeiro assim que ocorrer.
	isReady : false ,

	// Um ​​contador para rastrear quantos itens esperar antes
	// o evento pronto dispara. Veja # 6781
	readyWait : 1 ,

	// Manipular quando o DOM estiver pronto
	pronto : função (  esperar  )  {

		// Aborta se houver retenções pendentes ou se já estivermos prontos
		if  (  wait  ===  true ? - jQuery . readyWait : jQuery . isReady  )  {
			retorno ;
		}

		// Lembre-se de que o DOM está pronto
		jQuery . isReady  =  true ;

		// Se um evento DOM Ready normal disparado, decrementar e esperar se necessário
		if  (  espere  ! ==  true  &&  - jQuery . readyWait  >  0  )  {
			retorno ;
		}

		// Se houver funções vinculadas, para executar
		readyList . resolveWith (  documento ,  [  jQuery  ]  ) ;
	}
}  ) ;

jQuery . pronto . então  =  readyList . então ;

// O manipulador de eventos pronto e o método de auto-limpeza
função  concluída ( )  {
	documento . removeEventListener (  "DOMContentLoaded" ,  concluído  ) ;
	janela . removeEventListener (  "carregar" ,  concluído  ) ;
	jQuery . pronto ( ) ;
}

// Captura os casos em que $ (document) .ready () é chamado
// depois que o evento do navegador já ocorreu.
// Suporte: IE <= 9 - 10 apenas
// IE mais antigo às vezes indica "interativo" muito cedo
if  (  document . readyState  ===  "complete"  ||
	(  document . readyState  ! ==  "carregando"  &&  ! document . documentElement . doScroll  )  )  {

	// Lide com isso de forma assíncrona para permitir que os scripts tenham a oportunidade de ficar prontos
	janela . setTimeout (  jQuery . pronto  ) ;

}  else  {

	// Use o retorno de chamada de evento útil
	documento . addEventListener (  "DOMContentLoaded" ,  concluído  ) ;

	// Um ​​fallback para window.onload, que sempre funcionará
	janela . addEventListener (  "carregar" ,  concluído  ) ;
}




// Método multifuncional para obter e definir os valores de uma coleção
// O valor / s pode ser executado opcionalmente se for uma função
var  acesso  =  função (  elems ,  fn ,  chave ,  valor ,  encadeável ,  emptyGet ,  cru  )  {
	var  i  =  0 ,
		len  =  elems . comprimento ,
		bulk  =  key  ==  null ;

	// Define muitos valores
	if  (  jQuery . type (  key  )  ===  "objeto"  )  {
		acorrentável  =  verdadeiro ;
		para  (  i  na  chave  )  {
			access (  elems ,  fn ,  i ,  key [  i  ] ,  true ,  emptyGet ,  raw  ) ;
		}

	// Define um valor
	}  else  if  (  value  ! ==  undefined  )  {
		acorrentável  =  verdadeiro ;

		if  (  ! jQuery . isFunction (  value  )  )  {
			raw  =  true ;
		}

		if  (  bulk  )  {

			// As operações em massa são executadas em todo o conjunto
			if  (  raw  )  {
				fn . chamada (  elems ,  valor  ) ;
				fn  =  nulo ;

			// ... exceto ao executar valores de função
			}  else  {
				bulk  =  fn ;
				fn  =  função (  elem ,  chave ,  valor  )  {
					retornar em  massa . chamada (  jQuery (  elem  ) ,  valor  ) ;
				} ;
			}
		}

		if  (  fn  )  {
			para  (  ;  i  <  len ;  i ++  )  {
				fn (
					elems [  i  ] ,  chave ,  cru ?
					valor :
					valor . chamada (  elems [  i  ] ,  i ,  fn (  elems [  i  ] ,  chave  )  )
				) ;
			}
		}
	}

	if  (  encadeavel  )  {
		return  elems ;
	}

	// Obtém
	if  (  bulk  )  {
		return  fn . chamada (  elems  ) ;
	}

	return  len ? fn (  elems [  0  ] ,  tecla  ) : emptyGet ;
} ;
var  acceptData  =  função (  proprietário  )  {

	// Aceita apenas:
	// - Nó
	// - Node.ELEMENT_NODE
	// - Nó.DOCUMENT_NODE
	// - objeto
	// - Algum
	 proprietário de retorno . nodeType  ===  1  ||  proprietário . nodeType  ===  9  ||  ! (  + proprietário . nodeType  ) ;
} ;




function  Data ( )  {
	isso . expando  =  jQuery . expando  +  Dados . uid ++ ;
}

Dados . uid  =  1 ;

Dados . protótipo  =  {

	cache : função (  proprietário  )  {

		// Verifique se o objeto proprietário já tem um cache
		var  value  =  owner [  this . expando  ] ;

		// Caso contrário, crie um
		if  (  ! valor  )  {
			valor  =  { } ;

			// Podemos aceitar dados para nós que não são elementos em navegadores modernos,
			// mas não devemos, consulte # 8335.
			// Sempre retorna um objeto vazio.
			if  (  acceptData (  owner  )  )  {

				// Se for um nó improvável de ser transformado em string ou em loop
				// use atribuição simples
				if  (  owner . nodeType  )  {
					proprietário [  isso . expando  ]  =  valor ;

				// Caso contrário, proteja-o em uma propriedade não enumerável
				// configurável deve ser verdadeiro para permitir que a propriedade seja
				// excluído quando os dados são removidos
				}  else  {
					Objeto . defineProperty (  proprietário ,  este . expando ,  {
						valor : valor ,
						configurável : verdadeiro
					}  ) ;
				}
			}
		}

		 valor de retorno ;
	} ,
	conjunto : função (  proprietário ,  dados ,  valor  )  {
		var  prop ,
			cache  =  this . cache (  proprietário  ) ;

		// Manipular: argumentos [proprietário, chave, valor]
		// Sempre use a chave camelCase (gh-2257)
		if  (  typeof  data  ===  "string"  )  {
			cache [  jQuery . camelCase (  dados  )  ]  =  valor ;

		// Handle: [owner, {properties}] args
		}  else  {

			// Copie as propriedades uma a uma para o objeto de cache
			para  (  prop  em  dados  )  {
				cache [  jQuery . camelCase (  prop  )  ]  =  dados [  prop  ] ;
			}
		}
		 cache de retorno ;
	} ,
	get : function (  owner ,  key  )  {
		 chave de  retorno ===  indefinido ?
			isso . cache (  proprietário  ) :

			// Sempre use a chave camelCase (gh-2257)
			proprietário [  isso . expando  ]  &&  proprietário [  este . expando  ] [  jQuery . camelCase (  chave  )  ] ;
	} ,
	acesso : função (  proprietário ,  chave ,  valor  )  {

		// Nos casos em que:
		//
		// 1. Nenhuma chave foi especificada
		// 2. Uma chave de string foi especificada, mas nenhum valor fornecido
		//
		// Pegue o caminho de "leitura" e permita que o método get determine
		// qual valor retornar, respectivamente:
		//
		// 1. Todo o objeto de cache
		// 2. Os dados armazenados na chave
		//
		if  (  chave  ===  undefined  ||
				(  (  chave  &&  typeof  key  ===  "string"  )  &&  value  ===  undefined  )  )  {

			devolva  isso . get (  proprietário ,  chave  ) ;
		}

		// Quando a chave não é uma string, ou uma chave e um valor
		// são especificados, definidos ou estendidos (objetos existentes) com:
		//
		// 1. Um objeto de propriedades
		// 2. Uma chave e um valor
		//
		isso . set (  proprietário ,  chave ,  valor  ) ;

		// Uma vez que o caminho "definido" pode ter dois pontos de entrada possíveis
		// retorna os dados esperados com base em qual caminho foi percorrido [*]
		 valor de  retorno ! ==  indefinido ? valor : chave ;
	} ,
	remover : função (  proprietário ,  chave  )  {
		var  i ,
			cache  =  proprietário [  isto . expando  ] ;

		if  (  cache  ===  indefinido  )  {
			retorno ;
		}

		if  (  chave  ! ==  undefined  )  {

			// Aceita array ou string de chaves separadas por espaço
			if  (  Array . isArray (  key  )  )  {

				// Se a chave é um array de chaves ...
				// Sempre definimos as chaves camelCase, portanto, remova-as.
				chave  =  chave . mapa (  jQuery . camelCase  ) ;
			}  else  {
				chave  =  jQuery . camelCase (  chave  ) ;

				// Se existe uma chave com os espaços, use-a.
				// Caso contrário, crie uma matriz combinando espaços não em branco
				chave  =  chave  no  cache ?
					[  chave  ] :
					(  chave . match (  rnothtmlwhite  )  ||  [ ]  ) ;
			}

			i  =  chave . comprimento ;

			enquanto  (  i -  )  {
				excluir  cache [  chave [  i  ]  ] ;
			}
		}

		// Remova o expando se não houver mais dados
		if  (  key  ===  undefined  ||  jQuery . isEmptyObject (  cache  )  )  {

			// Suporte: Chrome <= 35 - 45
			// O desempenho do Webkit e do Blink é afetado ao excluir propriedades
			// a partir de nós DOM, então defina como indefinido
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restrito)
			if  (  owner . nodeType  )  {
				proprietário [  isso . expando  ]  =  indefinido ;
			}  else  {
				excluir  proprietário [  este . expando  ] ;
			}
		}
	} ,
	hasData : function (  owner  )  {
		var  cache  =  owner [  this . expando  ] ;
		return  cache  ! ==  undefined  &&  ! jQuery . isEmptyObject (  cache  ) ;
	}
} ;
var  dataPriv  =  new  Data ( ) ;

var  dataUser  =  new  Data ( ) ;



// Resumo da implementação
//
// 1. Aplicar superfície API e compatibilidade semântica com branch 1.9.x
// 2. Melhore a capacidade de manutenção do módulo reduzindo o armazenamento
// caminhos para um único mecanismo.
// 3. Use o mesmo mecanismo único para suportar dados "privados" e "do usuário".
// 4. _Nunca_ exponha dados "privados" ao código do usuário (TODO: Drop _data, _removeData)
// 5. Evite expor detalhes de implementação em objetos de usuário (por exemplo, propriedades expando)
// 6. Fornece um caminho claro para a atualização de implementação para WeakMap em 2014

var  rbrace  =  / ^ (?: \ { [ \ w \ W ] * \} | \ [ [ \ w \ W ] * \] ) $ / ,
	rmultiDash  =  / [ AZ ] / g ;

function  getData (  data  )  {
	if  (  dados  ===  "verdadeiro"  )  {
		return  true ;
	}

	if  (  data  ===  "false"  )  {
		return  false ;
	}

	if  (  dados  ===  "nulo"  )  {
		return  null ;
	}

	// Só converte para um número se não mudar a string
	if  (  dados  ===  + dados  +  ""  )  {
		return  + data ;
	}

	if  (  rbrace . teste (  dados  )  )  {
		return  JSON . analisar (  dados  ) ;
	}

	 dados de retorno ;
}

function  dataAttr (  elem ,  chave ,  dados  )  {
	var  name ;

	// Se nada foi encontrado internamente, tente buscar qualquer
	// dados do atributo HTML5 data- *
	if  (  dados  ===  undefined  &&  elem . nodeType  ===  1  )  {
		nome  =  "dados-"  +  tecla . substituir (  rmultiDash ,  "- $ &"  ) . toLowerCase ( ) ;
		dados  =  elem . getAttribute (  name  ) ;

		if  (  typeof  data  ===  "string"  )  {
			tente  {
				dados  =  getData (  dados  ) ;
			}  catch  (  e  )  { }

			// Certifique-se de definir os dados para que não sejam alterados depois
			dataUser . conjunto (  elem ,  chave ,  dados  ) ;
		}  else  {
			dados  =  indefinido ;
		}
	}
	 dados de retorno ;
}

jQuery . extend (  {
	hasData : function (  elem  )  {
		return  dataUser . hasData (  elem  )  ||  dataPriv . hasData (  elem  ) ;
	} ,

	dados : função (  elem ,  nome ,  dados  )  {
		return  dataUser . acesso (  elem ,  nome ,  dados  ) ;
	} ,

	removeData : function (  elem ,  name  )  {
		dataUser . remover (  elem ,  nome  ) ;
	} ,

	// TODO: Agora que todas as chamadas para _data e _removeData foram substituídas
	// com chamadas diretas para métodos dataPriv, eles podem ser descontinuados.
	_data : função (  elem ,  nome ,  dados  )  {
		return  dataPriv . acesso (  elem ,  nome ,  dados  ) ;
	} ,

	_removeData : função (  elem ,  nome  )  {
		dataPriv . remover (  elem ,  nome  ) ;
	}
}  ) ;

jQuery . fn . extend (  {
	dados : função (  chave ,  valor  )  {
		var  i ,  nome ,  dados ,
			elem  =  este [  0  ] ,
			attrs  =  elem  &&  elem . atributos ;

		// Obtém todos os valores
		if  (  chave  ===  indefinido  )  {
			if  (  this . length  )  {
				data  =  dataUser . get (  elem  ) ;

				if  (  elem . nodeType  ===  1  &&  ! dataPriv . get (  elem ,  "hasDataAttrs"  )  )  {
					i  =  atrs . comprimento ;
					enquanto  (  i -  )  {

						// Suporte: apenas IE 11
						// Os elementos attrs podem ser nulos (# 14894)
						if  (  attrs [  i  ]  )  {
							nome  =  attrs [  i  ] . nome ;
							if  (  name . indexOf (  "data-"  )  ===  0  )  {
								nome  =  jQuery . camelCase (  nome . fatia (  5  )  ) ;
								dataAttr (  elem ,  nome ,  dados [  nome  ]  ) ;
							}
						}
					}
					dataPriv . set (  elem ,  "hasDataAttrs" ,  true  ) ;
				}
			}

			 dados de retorno ;
		}

		// Define vários valores
		if  (  typeof  key  ===  "objeto"  )  {
			devolva  isso . cada (  função ( )  {
				dataUser . set (  esta ,  chave  ) ;
			}  ) ;
		}

		 acesso de retorno (  isto ,  função (  valor  )  {
			var  data ;

			// O objeto de chamada jQuery (correspondências de elemento) não está vazio
			// (e, portanto, tem um elemento que aparece neste [0]) e o
			// parâmetro `valor` não foi indefinido. Um objeto jQuery vazio
			// resultará em `undefined` para elem = this [0] que irá
			// lança uma exceção se for feita uma tentativa de ler um cache de dados.
			if  (  elem  &&  value  ===  undefined  )  {

				// Tenta obter dados do cache
				// A chave sempre será camelCased in Data
				data  =  dataUser . get (  elem ,  chave  ) ;
				if  (  dados  ! ==  indefinido  )  {
					 dados de retorno ;
				}

				// Tenta "descobrir" os dados em
				// HTML5 custom data- * attrs
				dados  =  dataAttr (  elem ,  chave  ) ;
				if  (  dados  ! ==  indefinido  )  {
					 dados de retorno ;
				}

				// Tentamos muito, mas os dados não existem.
				retorno ;
			}

			// Defina os dados ...
			isso . cada (  função ( )  {

				// Sempre armazenamos a chave camelCased
				dataUser . set (  isto ,  chave ,  valor  ) ;
			}  ) ;
		} ,  nulo ,  valor ,  argumentos . comprimento  >  1 ,  nulo ,  verdadeiro  ) ;
	} ,

	removeData : function (  key  )  {
		devolva  isso . cada (  função ( )  {
			dataUser . remover (  esta ,  chave  ) ;
		}  ) ;
	}
}  ) ;


jQuery . extend (  {
	fila : função (  elem ,  tipo ,  dados  )  {
		var  queue ;

		if  (  elem  )  {
			tipo  =  (  digite  ||  "fx"  )  +  "fila" ;
			fila  =  dataPriv . get (  elem ,  tipo  ) ;

			// Acelere o desenfileiramento saindo rapidamente se for apenas uma pesquisa
			if  (  dados  )  {
				if  (  ! queue  ||  Array . isArray (  data  )  )  {
					fila  =  dataPriv . acesso (  elem ,  tipo ,  jQuery . makeArray (  dados  )  ) ;
				}  else  {
					fila . push (  dados  ) ;
				}
			}
			 fila de  retorno ||  [ ] ;
		}
	} ,

	dequeue : function (  elem ,  type  )  {
		tipo  =  tipo  ||  "fx" ;

		var  queue  =  jQuery . fila (  elem ,  tipo  ) ,
			startLength  =  fila . comprimento ,
			fn  =  fila . shift ( ) ,
			ganchos  =  jQuery . _queueHooks (  elem ,  tipo  ) ,
			próxima  =  função ( )  {
				jQuery . desenfileirar (  elem ,  tipo  ) ;
			} ;

		// Se a fila fx for retirada da fila, sempre remova a sentinela de progresso
		if  (  fn  ===  "em andamento"  )  {
			fn  =  fila . shift ( ) ;
			startLength - ;
		}

		if  (  fn  )  {

			// Adicione uma sentinela de progresso para evitar que a fila fx seja
			// desenfileirado automaticamente
			if  (  digite  ===  "fx"  )  {
				fila . sem mudança (  "em progresso"  ) ;
			}

			// Limpa a última função de parada da fila
			exclua  ganchos . pare ;
			fn . chamada (  elem ,  próximo ,  ganchos  ) ;
		}

		if  (  ! startLength  &&  hooks  )  {
			ganchos . vazio . fogo ( ) ;
		}
	} ,

	// Não é público - gera um objeto queueHooks ou retorna o atual
	_queueHooks : function (  elem ,  type  )  {
		var  key  =  type  +  "queueHooks" ;
		return  dataPriv . get (  elem ,  chave  )  ||  dataPriv . acesso (  elem ,  chave ,  {
			vazio : jQuery . Retornos de chamada (  "uma vez na memória"  ) . add (  function ( )  {
				dataPriv . remover (  elem ,  [  digite  +  "fila" ,  tecla  ]  ) ;
			}  )
		}  ) ;
	}
}  ) ;

jQuery . fn . extend (  {
	fila : função (  tipo ,  dados  )  {
		var  setter  =  2 ;

		if  (  typeof  type  ! ==  "string"  )  {
			dados  =  tipo ;
			tipo  =  "fx" ;
			setter - ;
		}

		if  (  argumentos . comprimento  <  setter  )  {
			return  jQuery . fila (  este [  0  ] ,  tipo  ) ;
		}

		 dados de  retorno ===  indefinido ?
			este :
			isso . cada (  função ( )  {
				var  queue  =  jQuery . fila (  este ,  tipo ,  dados  ) ;

				// Garanta ganchos para esta fila
				jQuery . _queueHooks (  este ,  digite  ) ;

				if  (  digite  ===  "fx"  &&  queue [  0  ]  ! ==  "inprogress"  )  {
					jQuery . desenfileirar (  este ,  digite  ) ;
				}
			}  ) ;
	} ,
	dequeue : function (  type  )  {
		devolva  isso . cada (  função ( )  {
			jQuery . desenfileirar (  este ,  digite  ) ;
		}  ) ;
	} ,
	clearQueue : function (  type  )  {
		devolva  isso . fila (  digite  ||  "fx" ,  [ ]  ) ;
	} ,

	// Obter uma promessa resolvida quando há filas de um certo tipo
	// são esvaziados (fx é o tipo por padrão)
	promessa : função (  tipo ,  obj  )  {
		var  tmp ,
			contagem  =  1 ,
			adiar  =  jQuery . Adiado ( ) ,
			elementos  =  isso ,
			i  =  isso . comprimento ,
			resolve  =  function ( )  {
				if  (  ! (  - contagem  )  )  {
					adiar . resolveWith (  elementos ,  [  elementos  ]  ) ;
				}
			} ;

		if  (  typeof  type  ! ==  "string"  )  {
			obj  =  tipo ;
			tipo  =  indefinido ;
		}
		tipo  =  tipo  ||  "fx" ;

		enquanto  (  i -  )  {
			tmp  =  dataPriv . get (  elements [  i  ] ,  digite  +  "queueHooks"  ) ;
			if  (  tmp  &&  tmp . vazio  )  {
				contagem ++ ;
				tmp . vazio . adicionar (  resolver  ) ;
			}
		}
		resolver ( ) ;
		retorno  adiar . promessa (  obj  ) ;
	}
}  ) ;
var  pnum  =  (  / [ + - ] ? (?: \ d * \. | ) \ d + (?: [ eE ] [ + - ] ? \ d + | ) /  ) . fonte ;

var  rcssNum  =  new  RegExp (  "^ (?: ([+ -]) = |) ("  +  pnum  +  ") ([az%] *) $" ,  "i"  ) ;


var  cssExpand  =  [  "Superior" ,  "Direita" ,  "Inferior" ,  "Esquerda"  ] ;

var  isHiddenWithinTree  =  function (  elem ,  el  )  {

		// isHiddenWithinTree pode ser chamado a partir da função jQuery # filter;
		// nesse caso, o elemento será o segundo argumento
		elem  =  el  ||  elem ;

		// Estilo embutido supera tudo
		return  elem . estilo . display  ===  "nenhum"  ||
			elem . estilo . exibir  ===  ""  &&

			// Caso contrário, verifique o estilo calculado
			// Suporte: Firefox <= 43 - 45
			// Os elementos desconectados podem ter exibição computada: nenhum, então primeiro confirme se o elemento é
			// no documento.
			jQuery . contém (  elem . ownerDocument ,  elem  )  &&

			jQuery . css (  elem ,  "display"  )  ===  "nenhum" ;
	} ;

var  swap  =  function (  elem ,  options ,  callback ,  args  )  {
	var  ret ,  nome ,
		antigo  =  { } ;

	// Lembre-se dos valores antigos e insira os novos
	para  (  nome  em  opções  )  {
		antigo [  nome  ]  =  elem . estilo [  nome  ] ;
		elem . estilo [  nome  ]  =  opções [  nome  ] ;
	}

	ret  =  retorno de chamada . aplicar (  elem ,  args  ||  [ ]  ) ;

	// Reverter os valores antigos
	para  (  nome  em  opções  )  {
		elem . estilo [  nome  ]  =  antigo [  nome  ] ;
	}

	return  ret ;
} ;




função  AdjustCSS (  elem ,  prop ,  valueParts ,  tween  )  {
	var  ajustado ,
		escala  =  1 ,
		maxIterations  =  20 ,
		currentValue  =  tween ?
			function ( )  {
				voltar  tween . cur ( ) ;
			} :
			function ( )  {
				return  jQuery . css (  elem ,  prop ,  ""  ) ;
			} ,
		inicial  = valor  atual ( ) ,
		unit  =  valueParts  &&  valueParts [  3  ]  ||  (  jQuery . cssNumber [  prop  ] ? "" : "px"  ) ,

		// O cálculo do valor inicial é necessário para possíveis incompatibilidades de unidade
		initialInUnit  =  (  jQuery . cssNumber [  prop  ]  ||  unit  ! ==  "px"  &&  + inicial  )  &&
			rcssNum . exec (  jQuery . css (  elem ,  prop  )  ) ;

	if  (  initialInUnit  &&  initialInUnit [  3  ]  ! ==  unidade  )  {

		// Unidades de confiança relatadas por jQuery.css
		unidade  =  unidade  ||  initialInUnit [  3  ] ;

		// Certifique-se de atualizar as propriedades de interpolação mais tarde
		valueParts  =  valueParts  ||  [ ] ;

		// Iterativamente aproximado de um ponto de partida diferente de zero
		initialInUnit  =  + inicial  ||  1 ;

		faça  {

			// Se a iteração anterior zerou, dobre até obter * algo *.
			// Use string para dobrar para que não vejamos acidentalmente a escala inalterada abaixo
			escala  =  escala  ||  ".5" ;

			// Ajustar e aplicar
			initialInUnit  =  initialInUnit  /  escala ;
			jQuery . estilo (  elem ,  prop ,  inicialInUnidade  +  unidade  ) ;

		// Atualizar escala, tolerando zero ou NaN de tween.cur ()
		// Quebre o loop se a escala não for alterada ou perfeita, ou se já tivermos o suficiente.
		}  enquanto  (
			escala  ! ==  (  escala  = valor  atual ( )  /  inicial  )  &&  escala  ! ==  1  &&  - maxIterações
		) ;
	}

	if  (  valueParts  )  {
		initialInUnit  =  + initialInUnit  ||  + inicial  ||  0 ;

		// Aplicar deslocamento relativo (+ = / - =) se especificado
		ajustado  =  valorPartes [  1  ] ?
			initialInUnit  +  (  valueParts [  1  ]  +  1  )  *  valueParts [  2  ] :
			+ peças de valor [  2  ] ;
		if  (  tween  )  {
			interpolação . unidade  =  unidade ;
			interpolação . start  =  initialInUnit ;
			interpolação . fim  =  ajustado ;
		}
	}
	retorno  ajustado ;
}


var  defaultDisplayMap  =  { } ;

function  getDefaultDisplay (  elem  )  {
	var  temp ,
		doc  =  elem . ownerDocument ,
		nodeName  =  elem . nodeName ,
		display  =  defaultDisplayMap [  nodeName  ] ;

	if  (  display  )  {
		 display de retorno ;
	}

	temp  =  doc . corpo . appendChild (  doc . createElement (  nodeName  )  ) ;
	display  =  jQuery . css (  temp ,  "exibir"  ) ;

	temp . parentNode . removeChild (  temp  ) ;

	if  (  exibir  ===  "nenhum"  )  {
		display  =  "bloco" ;
	}
	defaultDisplayMap [  nodeName  ]  =  display ;

	 display de retorno ;
}

function  showHide (  elements ,  show  )  {
	var  display ,  elem ,
		valores  =  [ ] ,
		índice  =  0 ,
		comprimento  =  elementos . comprimento ;

	// Determine o novo valor de exibição para os elementos que precisam ser alterados
	para  (  ;  índice  <  comprimento ;  índice ++  )  {
		elem  =  elementos [  índice  ] ;
		if  (  ! elem . style  )  {
			continue ;
		}

		display  =  elem . estilo . display ;
		if  (  show  )  {

			// Uma vez que forçamos a visibilidade sobre os elementos ocultos em cascata, um imediato (e lento)
			// a verificação é necessária neste primeiro loop, a menos que tenhamos um valor de exibição não vazio (qualquer
			// inline ou prestes a ser restaurado)
			if  (  exibir  ===  "nenhum"  )  {
				valores [  índice  ]  =  dataPriv . get (  elem ,  "display"  )  ||  null ;
				if  (  ! valores [  índice  ]  )  {
					elem . estilo . display  =  "" ;
				}
			}
			if  (  elem . style . display  ===  ""  &&  isHiddenWithinTree (  elem  )  )  {
				valores [  índice  ]  =  getDefaultDisplay (  elem  ) ;
			}
		}  else  {
			if  (  display  ! ==  "none"  )  {
				valores [  índice  ]  =  "nenhum" ;

				// Lembre-se do que estamos substituindo
				dataPriv . set (  elem ,  "display" ,  display  ) ;
			}
		}
	}

	// Defina a exibição dos elementos em um segundo loop para evitar refluxo constante
	para  (  índice  =  0 ;  índice  <  comprimento ;  índice ++  )  {
		if  (  valores [  índice  ]  ! =  nulo  )  {
			elementos [  índice  ] . estilo . display  =  valores [  índice  ] ;
		}
	}

	 elementos de retorno ;
}

jQuery . fn . extend (  {
	show : function ( )  {
		return  showHide (  this ,  true  ) ;
	} ,
	ocultar : função ( )  {
		return  showHide (  this  ) ;
	} ,
	alternar : função (  estado  )  {
		if  (  typeof  state  ===  "boolean"  )  {
			 estado de retorno ? isso . show ( ) : isso . hide ( ) ;
		}

		devolva  isso . cada (  função ( )  {
			if  (  isHiddenWithinTree (  this  )  )  {
				jQuery (  isso  ) . show ( ) ;
			}  else  {
				jQuery (  isso  ) . hide ( ) ;
			}
		}  ) ;
	}
}  ) ;
var  rcheckableType  =  (  / ^ (?: checkbox | radio ) $ / i  ) ;

var  rtagName  =  (  / < ( [ az ] [ ^ \ / \ 0 > \ x 20 \ t \ r \ n \ f ] + ) / i  ) ;

var  rscriptType  =  (  / ^ $ | \ / (?: java | ecma ) script / i  ) ;



// Temos que fechar essas tags para suportar XHTML (# 13200)
var  wrapMap  =  {

	// Suporte: IE <= 9 apenas
	opção : [  1 ,  "<select multiple = 'multiple'>" ,  "</select>"  ] ,

	// Os analisadores XHTML não inserem magicamente elementos no
	// da mesma forma que os analisadores de sopa de tags fazem. Portanto, não podemos encurtar
	// isso omitindo <tbody> ou outros elementos obrigatórios.
	thead : [  1 ,  "<table>" ,  "</table>"  ] ,
	col : [  2 ,  "<table> <colgroup>" ,  "</colgroup> </table>"  ] ,
	tr : [  2 ,  "<table> <tbody>" ,  "</tbody> </table>"  ] ,
	td : [  3 ,  "<table> <tbody> <tr>" ,  "</tr> </tbody> </table>"  ] ,

	_padrão : [  0 ,  "" ,  ""  ]
} ;

// Suporte: IE <= 9 apenas
wrapMap . optgroup  =  wrapMap . opção ;

wrapMap . tbody  =  wrapMap . tfoot  =  wrapMap . colgroup  =  wrapMap . caption  =  wrapMap . thead ;
wrapMap . th  =  wrapMap . td ;


function  getAll (  context ,  tag  )  {

	// Suporte: IE <= 9 - 11 apenas
	// Use typeof para evitar a invocação de método de argumento zero em objetos de host (# 15151)
	var  ret ;

	if  (  typeof  context . getElementsByTagName  ! ==  "undefined"  )  {
		ret  =  contexto . getElementsByTagName (  tag  ||  "*"  ) ;

	}  else  if  (  typeof  context . querySelectorAll  ! ==  "undefined"  )  {
		ret  =  contexto . querySelectorAll (  tag  ||  "*"  ) ;

	}  else  {
		ret  =  [ ] ;
	}

	if  (  tag  ===  undefined  ||  tag  &&  nodeName (  context ,  tag  )  )  {
		return  jQuery . mesclar (  [  contexto  ] ,  ret  ) ;
	}

	return  ret ;
}


// Marcar scripts como já avaliados
function  setGlobalEval (  elems ,  refElements  )  {
	var  i  =  0 ,
		l  =  elems . comprimento ;

	para  (  ;  i  <  l ;  i ++  )  {
		dataPriv . set (
			elems [  i  ] ,
			"globalEval" ,
			! RefElementos  ||  dataPriv . get (  refElements [  i  ] ,  "globalEval"  )
		) ;
	}
}


var  rhtml  =  / < | & #? \ w + ; / ;

function  buildFragment (  elems ,  contexto ,  scripts ,  seleção ,  ignorado  )  {
	var  elem ,  tmp ,  tag ,  wrap ,  contains ,  j ,
		fragmento  =  contexto . createDocumentFragment ( ) ,
		nodes  =  [ ] ,
		i  =  0 ,
		l  =  elems . comprimento ;

	para  (  ;  i  <  l ;  i ++  )  {
		elem  =  elems [  i  ] ;

		if  (  elem  ||  elem  ===  0  )  {

			// Adicionar nós diretamente
			if  (  jQuery . type (  elem  )  ===  "objeto"  )  {

				// Suporte: Android <= 4.0 apenas, PhantomJS 1 apenas
				// push.apply (_, arraylike) lança no antigo WebKit
				jQuery . mesclar (  nós ,  elem . nodeType ? [  elem  ] : elem  ) ;

			// Converte não-html em um nó de texto
			}  else  if  (  ! rhtml . test (  elem  )  )  {
				nós . push (  context . createTextNode (  elem  )  ) ;

			// Converter html em nós DOM
			}  else  {
				tmp  =  tmp  ||  fragmento . appendChild (  context . createElement (  "div"  )  ) ;

				// Desserializa uma representação padrão
				tag  =  (  rtagName . exec (  elem  )  ||  [  "" ,  ""  ]  ) [  1  ] . toLowerCase ( ) ;
				wrap  =  wrapMap [  tag  ]  ||  wrapMap . _default ;
				tmp . innerHTML  =  wrap [  1  ]  +  jQuery . htmlPrefilter (  elem  )  +  wrap [  2  ] ;

				// Desça através dos invólucros para o conteúdo certo
				j  =  embrulhar [  0  ] ;
				enquanto  (  j -  )  {
					tmp  =  tmp . lastChild ;
				}

				// Suporte: Android <= 4.0 apenas, PhantomJS 1 apenas
				// push.apply (_, arraylike) lança no antigo WebKit
				jQuery . mesclar (  nós ,  tmp . childNodes  ) ;

				// Lembre-se do contêiner de nível superior
				tmp  =  fragmento . firstChild ;

				// Certifique-se de que os nós criados são órfãos (# 12392)
				tmp . textContent  =  "" ;
			}
		}
	}

	// Remova o invólucro do fragmento
	fragmento . textContent  =  "" ;

	i  =  0 ;
	while  (  (  elem  =  nodes [  i ++  ]  )  )  {

		// Pula elementos que já estão na coleção de contexto (trac-4087)
		if  (  seleção  &&  jQuery . inArray (  elem ,  seleção  )  >  - 1  )  {
			if  (  ignorado  )  {
				ignorado . empurrar (  elem  ) ;
			}
			continue ;
		}

		contém  =  jQuery . contém (  elem . ownerDocument ,  elem  ) ;

		// Anexar ao fragmento
		tmp  =  getAll (  frag . appendChild (  elem  ) ,  "script"  ) ;

		// Preserve o histórico de avaliação do script
		if  (  contém  )  {
			setGlobalEval (  tmp  ) ;
		}

		// Captura executáveis
		if  (  scripts  )  {
			j  =  0 ;
			while  (  (  elem  =  tmp [  j ++  ]  )  )  {
				if  (  rscriptType . test (  elem . type  ||  ""  )  )  {
					scripts . empurrar (  elem  ) ;
				}
			}
		}
	}

	 fragmento de retorno ;
}


(  função ( )  {
	 fragmento  var =  documento . createDocumentFragment ( ) ,
		div  =  fragmento . appendChild (  document . createElement (  "div"  )  ) ,
		entrada  =  documento . createElement (  "input"  ) ;

	// Suporte: Android 4.0 - 4.3 apenas
	// Verifique o estado perdido se o nome estiver definido (# 11217)
	// Suporte: Windows Web Apps (WWA)
	// `name` e` type` devem usar .setAttribute para WWA (# 14901)
	entrada . setAttribute (  "tipo" ,  "rádio"  ) ;
	entrada . setAttribute (  "verificado" ,  "verificado"  ) ;
	entrada . setAttribute (  "nome" ,  "t"  ) ;

	div . appendChild (  entrada  ) ;

	// Suporte: Android <= 4.1 apenas
	// O WebKit mais antigo não clona o estado verificado corretamente em fragmentos
	suporte . checkClone  =  div . cloneNode (  verdadeiro  ) . cloneNode (  verdadeiro  ) . lastChild . verificado ;

	// Suporte: IE <= 11 apenas
	// Certifique-se de que textarea (e caixa de seleção) defaultValue está devidamente clonado
	div . innerHTML  =  "<textarea> x </textarea>" ;
	suporte . noCloneChecked  =  ! ! div . cloneNode (  verdadeiro  ) . lastChild . defaultValue ;
}  ) ( ) ;
var  documentElement  =  document . documentElement ;



var
	rkeyEvent  =  / ^ key / ,
	rmouseEvent  =  / ^ (?: mouse | ponteiro | contextmenu | arrastar | soltar ) | clique em / ,
	rtypenamespace  =  / ^ ( [ ^. ] * ) (?: \. ( . + ) | ) / ;

function  returnTrue ( )  {
	return  true ;
}

function  returnFalse ( )  {
	return  false ;
}

// Suporte: IE <= 9 apenas
// Veja # 13393 para mais informações
function  safeActiveElement ( )  {
	tente  {
		 documento de devolução . activeElement ;
	}  pegar  (  errar  )  {  }
}

função  em (  elem ,  tipos ,  seletor ,  dados ,  fn ,  um  )  {
	var  origFn ,  tipo ;

	// Tipos podem ser um mapa de tipos / manipuladores
	if  (  typeof  types  ===  "object"  )  {

		// (tipos-objeto, seletor, dados)
		se  (  typeof  seletor  ! ==  "string"  )  {

			// (tipos-objeto, dados)
			dados  =  dados  ||  seletor ;
			seletor  =  indefinido ;
		}
		para  (  digite  em  tipos  )  {
			on (  elem ,  tipo ,  seletor ,  dados ,  tipos [  tipo  ] ,  um  ) ;
		}
		return  elem ;
	}

	if  (  data  ==  null  &&  fn  ==  null  )  {

		// (tipos, fn)
		fn  =  seletor ;
		dados  =  seletor  =  indefinido ;
	}  else  if  (  fn  ==  null  )  {
		se  (  typeof  selector  ===  "string"  )  {

			// (tipos, seletor, fn)
			fn  =  dados ;
			dados  =  indefinido ;
		}  else  {

			// (tipos, dados, fn)
			fn  =  dados ;
			dados  =  seletor ;
			seletor  =  indefinido ;
		}
	}
	if  (  fn  ===  false  )  {
		fn  =  returnFalse ;
	}  else  if  (  ! fn  )  {
		return  elem ;
	}

	if  (  one  ===  1  )  {
		origFn  =  fn ;
		fn  =  função (  evento  )  {

			// Pode usar um conjunto vazio, uma vez que o evento contém a informação
			jQuery ( ) . desligado (  evento  ) ;
			return  origFn . aplicar (  isto ,  argumentos  ) ;
		} ;

		// Use o mesmo guid para que o chamador possa remover usando origFn
		fn . guid  =  origFn . guid  ||  (  origFn . guid  =  jQuery . guid ++  ) ;
	}
	return  elem . cada (  função ( )  {
		jQuery . evento . adicionar (  este ,  tipos ,  fn ,  dados ,  seletor  ) ;
	}  ) ;
}

/ *
 * Funções auxiliares para gerenciamento de eventos - não faz parte da interface pública.
 * Adereços à biblioteca addEvent de Dean Edwards para muitas das ideias.
 * /
jQuery . evento  =  {

	global : { } ,

	add : function (  elem ,  types ,  handler ,  data ,  selector  )  {

		var  handleObjIn ,  eventHandle ,  tmp ,
			eventos ,  t ,  handleObj ,
			especial ,  manipuladores ,  tipo ,  namespaces ,  origType ,
			elemData  =  dataPriv . get (  elem  ) ;

		// Não anexe eventos a nós noData ou texto / comentário (mas permita objetos simples)
		if  (  ! elemData  )  {
			retorno ;
		}

		// O chamador pode passar um objeto de dados personalizados no lugar do manipulador
		if  (  handler . handler  )  {
			handleObjIn  =  manipulador ;
			handler  =  handleObjIn . manipulador ;
			selector  =  handleObjIn . seletor ;
		}

		// Certifique-se de que os seletores inválidos gerem exceções no momento do anexo
		// Avalie contra documentElement no caso de elem ser um nó de não elemento (por exemplo, documento)
		if  (  seletor  )  {
			jQuery . encontrar . MatchSelector (  documentElement ,  selector  ) ;
		}

		// Certifique-se de que o manipulador tenha um ID exclusivo, usado para localizar / removê-lo posteriormente
		if  (  ! handler . guid  )  {
			manipulador . guid  =  jQuery . guid ++ ;
		}

		// Inicia a estrutura de evento do elemento e o manipulador principal, se este for o primeiro
		if  (  ! (  eventos  =  elemData . eventos  )  )  {
			eventos  =  elemData . eventos  =  { } ;
		}
		if  (  ! (  eventHandle  =  elemData . handle  )  )  {
			eventHandle  =  elemData . lidar  =  função (  e  )  {

				// Descarta o segundo evento de um jQuery.event.trigger () e
				// quando um evento é chamado depois que uma página foi descarregada
				return  typeof  jQuery  ! ==  "undefined"  &&  jQuery . evento . acionado  ! ==  e . tipo ?
					jQuery . evento . despacho . aplicar (  elem ,  argumentos  ) : indefinido ;
			} ;
		}

		// Lidar com vários eventos separados por um espaço
		tipos  =  (  tipos  ||  ""  ) . combinar (  rnothtmlwhite  )  ||  [  ""  ] ;
		t  =  tipos . comprimento ;
		enquanto  (  t -  )  {
			tmp  =  rtypenamespace . exec (  tipos [  t  ]  )  ||  [ ] ;
			type  =  origType  =  tmp [  1  ] ;
			namespaces  =  (  tmp [  2  ]  ||  ""  ) . dividir (  "."  ) . sort ( ) ;

			// * Deve * haver um tipo, nenhum manipulador somente de namespace anexado
			if  (  ! type  )  {
				continue ;
			}

			// Se o evento mudar de tipo, use os manipuladores de eventos especiais para o tipo alterado
			especial  =  jQuery . evento . especial [  tipo  ]  ||  { } ;

			// Se o seletor for definido, determine o tipo de API de evento especial, caso contrário, será fornecido
			type  =  (  selector ? special . delegateType : special . bindType  )  ||  tipo ;

			// Atualizar especial com base no tipo de redefinição recente
			especial  =  jQuery . evento . especial [  tipo  ]  ||  { } ;

			// handleObj é passado para todos os manipuladores de eventos
			handleObj  =  jQuery . extend (  {
				tipo : tipo ,
				origType : origType ,
				dados : dados ,
				handler : handler ,
				guid : handler . guid ,
				seletor : seletor ,
				needsContext : selector  &&  jQuery . expr . coincidir . needsContext . teste (  seletor  ) ,
				namespace : namespaces . junte-se (  "."  )
			} ,  handleObjIn  ) ;

			// Inicie a fila do manipulador de eventos se formos os primeiros
			if  (  ! (  manipuladores  =  eventos [  tipo  ]  )  )  {
				manipuladores  =  eventos [  tipo  ]  =  [ ] ;
				manipuladores . delegateCount  =  0 ;

				// Use apenas addEventListener se o manipulador de eventos especiais retornar falso
				if  (  ! special . setup  ||
					especial . configuração . call (  elem ,  data ,  namespaces ,  eventHandle  )  ===  false  )  {

					if  (  elem . addEventListener  )  {
						elem . addEventListener (  type ,  eventHandle  ) ;
					}
				}
			}

			if  (  especial . add  )  {
				especial . adicionar . chamar (  elem ,  handleObj  ) ;

				if  (  ! handleObj . handler . guid  )  {
					handleObj . manipulador . guid  =  manipulador . guid ;
				}
			}

			// Adicionar à lista de manipuladores do elemento, delegados na frente
			if  (  seletor  )  {
				manipuladores . splice (  manipuladores . delegateCount ++ ,  0 ,  handleObj  ) ;
			}  else  {
				manipuladores . push (  handleObj  ) ;
			}

			// Acompanhe quais eventos já foram usados, para otimização de eventos
			jQuery . evento . global [  tipo  ]  =  verdadeiro ;
		}

	} ,

	// Desanexar um evento ou conjunto de eventos de um elemento
	remove : function (  elem ,  types ,  handler ,  selector ,  mappedTypes  )  {

		var  j ,  origCount ,  tmp ,
			eventos ,  t ,  handleObj ,
			especial ,  manipuladores ,  tipo ,  namespaces ,  origType ,
			elemData  =  dataPriv . hasData (  elem  )  &&  dataPriv . get (  elem  ) ;

		if  (  ! elemData  ||  ! (  eventos  =  elemData . eventos  )  )  {
			retorno ;
		}

		// Uma vez para cada type.namespace em tipos; tipo pode ser omitido
		tipos  =  (  tipos  ||  ""  ) . combinar (  rnothtmlwhite  )  ||  [  ""  ] ;
		t  =  tipos . comprimento ;
		enquanto  (  t -  )  {
			tmp  =  rtypenamespace . exec (  tipos [  t  ]  )  ||  [ ] ;
			type  =  origType  =  tmp [  1  ] ;
			namespaces  =  (  tmp [  2  ]  ||  ""  ) . dividir (  "."  ) . sort ( ) ;

			// Desvincula todos os eventos (neste namespace, se fornecido) para o elemento
			if  (  ! type  )  {
				para  (  digite  em  eventos  )  {
					jQuery . evento . remove (  elem ,  tipo  +  tipos [  t  ] ,  manipulador ,  seletor ,  verdadeiro  ) ;
				}
				continue ;
			}

			especial  =  jQuery . evento . especial [  tipo  ]  ||  { } ;
			type  =  (  selector ? special . delegateType : special . bindType  )  ||  tipo ;
			manipuladores  =  eventos [  tipo  ]  ||  [ ] ;
			tmp  =  tmp [  2  ]  &&
				new  RegExp (  "(^ | \\.)"  +  namespaces . join (  "\\. (?:. * \\. |)"  )  +  "(\\. | $)"  ) ;

			// Remover eventos correspondentes
			origCount  =  j  =  manipuladores . comprimento ;
			enquanto  (  j -  )  {
				handleObj  =  manipuladores [  j  ] ;

				if  (  (  mappedTypes  ||  origType  ===  handleObj . origType  )  &&
					(  ! handler  ||  handler . guid  ===  handleObj . guid  )  &&
					(  ! tmp  ||  tmp . test (  handleObj . namespace  )  )  &&
					(  ! selector  ||  selector  ===  handleObj . selector  ||
						seletor  ===  "**"  &&  handleObj . selector  )  )  {
					manipuladores . emenda (  j ,  1  ) ;

					if  (  handleObj . selector  )  {
						manipuladores . delegateCount - ;
					}
					if  (  special . remove  )  {
						especial . remover . chamar (  elem ,  handleObj  ) ;
					}
				}
			}

			// Remova o manipulador de eventos genérico se removemos algo e não existem mais manipuladores
			// (evita o potencial de recursão infinita durante a remoção de manipuladores de eventos especiais)
			if  (  origCount  &&  ! manipuladores . comprimento  )  {
				if  (  ! especial . desmontagem  ||
					especial . desmontagem . call (  elem ,  namespaces ,  elemData . handle  )  ===  false  )  {

					jQuery . removeEvent (  elem ,  tipo ,  elemData . identificador  ) ;
				}

				excluir  eventos [  tipo  ] ;
			}
		}

		// Remova os dados e o expando se não for mais usado
		if  (  jQuery . isEmptyObject (  eventos  )  )  {
			dataPriv . remove (  elem ,  "manipula eventos"  ) ;
		}
	} ,

	dispatch : function (  nativeEvent  )  {

		// Faça um jQuery.Event gravável a partir do objeto de evento nativo
		var  event  =  jQuery . evento . corrigir (  nativeEvent  ) ;

		var  i ,  j ,  ret ,  combinado ,  handleObj ,  handlerQueue ,
			args  =  new  Array (  argumentos . comprimento  ) ,
			manipuladores  =  (  dataPriv . get (  this ,  "events"  )  ||  { }  ) [  event . tipo  ]  ||  [ ] ,
			especial  =  jQuery . evento . especial [  evento . tipo  ]  ||  { } ;

		// Use o jQuery.Event corrigido em vez do evento nativo (somente leitura)
		args [  0  ]  =  evento ;

		para  (  i  =  1 ;  i  <  argumentos . comprimento ;  i ++  )  {
			args [  i  ]  =  argumentos [  i  ] ;
		}

		evento . delegateTarget  =  this ;

		// Chame o gancho preDispatch para o tipo mapeado e deixe-o desaparecer, se desejar
		if  (  special . preDispatch  &&  special . preDispatch . call (  this ,  event  )  ===  false  )  {
			retorno ;
		}

		// Determinar manipuladores
		handlerQueue  =  jQuery . evento . manipuladores . chamada (  isto ,  evento ,  manipuladores  ) ;

		// Execute os delegados primeiro; eles podem querer parar a propagação abaixo de nós
		i  =  0 ;
		while  (  (  correspondido  =  handlerQueue [  i ++  ]  )  &&  ! event . isPropagationStopped ( )  )  {
			evento . currentTarget  =  combinado . elem ;

			j  =  0 ;
			enquanto  (  (  handleObj  =  combinados . manipuladores [  j ++  ]  )  &&
				! evento . isImmediatePropagationStopped ( )  )  {

				// O evento acionado deve 1) não ter namespace ou 2) ter namespace (s)
				// um subconjunto ou igual àqueles no evento vinculado (ambos podem não ter namespace).
				if  (  ! event . rnamespace  ||  event . rnamespace . test (  handleObj . namespace  )  )  {

					evento . handleObj  =  handleObj ;
					evento . dados  =  handleObj . dados ;

					ret  =  (  (  jQuery . event . special [  handleObj . origType  ]  ||  { }  ) . handle  ||
						handleObj . manipulador  ) . aplicar (  combinado . elem ,  args  ) ;

					if  (  ret  ! ==  indefinido  )  {
						if  (  (  evento . resultado  =  ret  )  ===  falso  )  {
							evento . preventDefault ( ) ;
							evento . stopPropagation ( ) ;
						}
					}
				}
			}
		}

		// Chame o gancho postDispatch para o tipo mapeado
		if  (  special . postDispatch  )  {
			especial . postDispatch . chamada (  este ,  evento  ) ;
		}

		 evento de retorno . resultado ;
	} ,

	manipuladores : função (  evento ,  manipuladores  )  {
		var  i ,  handleObj ,  sel ,  matchedHandlers ,  matchedSelectors ,
			handlerQueue  =  [ ] ,
			delegateCount  =  handlers . delegateCount ,
			cur  =  evento . alvo ;

		// Encontre manipuladores delegados
		if  (  delegateCount  &&

			// Suporte: IE <= 9
			// Árvores de instância <use> de SVG de buraco negro (trac-13180)
			cur . nodeType  &&

			// Suporte: Firefox <= 42
			// Suprime cliques que violam as especificações, indicando um botão apontador não primário (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Suporte: apenas IE 11
			// ... mas não os "cliques" da tecla de seta das entradas de rádio, que podem ter `botão` -1 (gh-2343)
			! (  evento . tipo  ===  "clique"  &&  evento . botão  > =  1  )  )  {

			for  (  ;  cur  ! ==  this ;  cur  =  cur . parentNode  ||  this  )  {

				// Não verifique não elementos (# 13208)
				// Não processa cliques em elementos desativados (# 6911, # 8165, # 11382, # 11764)
				if  (  cur . nodeType  ===  1  &&  ! (  event . type  ===  "click"  &&  cur . disabled  ===  true  )  )  {
					matchedHandlers  =  [ ] ;
					matchedSelectors  =  { } ;
					para  (  i  =  0 ;  i  <  delegateCount ;  i ++  )  {
						handleObj  =  manipuladores [  i  ] ;

						// Não entre em conflito com as propriedades Object.prototype (# 13203)
						sel  =  handleObj . seletor  +  "" ;

						if  (  matchedSelectors [  sel  ]  ===  undefined  )  {
							matchedSelectors [  sel  ]  =  handleObj . needsContext ?
								jQuery (  sel ,  this  ) . índice (  cur  )  >  - 1 :
								jQuery . find (  sel ,  this ,  null ,  [  cur  ]  ) . comprimento ;
						}
						if  (  matchedSelectors [  sel  ]  )  {
							matchedHandlers . push (  handleObj  ) ;
						}
					}
					if  (  matchedHandlers . length  )  {
						handlerQueue . push (  {  elem : cur ,  manipuladores : matchedHandlers  }  ) ;
					}
				}
			}
		}

		// Adicione os manipuladores restantes (ligados diretamente)
		cur  =  isso ;
		if  (  delegateCount  <  handlers . length  )  {
			handlerQueue . push (  {  elem : cur ,  manipuladores : manipuladores . slice (  delegateCount  )  }  ) ;
		}

		return  handlerQueue ;
	} ,

	addProp : function (  name ,  hook  )  {
		Objeto . defineProperty (  jQuery . Event . prototype ,  name ,  {
			enumerável : verdadeiro ,
			configurável : verdadeiro ,

			get : jQuery . isFunction (  gancho  ) ?
				function ( )  {
					if  (  this . originalEvent  )  {
							 gancho de retorno (  this . originalEvent  ) ;
					}
				} :
				function ( )  {
					if  (  this . originalEvent  )  {
							devolva  isso . originalEvent [  nome  ] ;
					}
				} ,

			definir : função (  valor  )  {
				Objeto . defineProperty (  this ,  name ,  {
					enumerável : verdadeiro ,
					configurável : verdadeiro ,
					gravável : verdadeiro ,
					valor : valor
				}  ) ;
			}
		}  ) ;
	} ,

	fix : function (  originalEvent  )  {
		retornar  originalEvent [  jQuery . expando  ] ?
			originalEvent :
			novo  jQuery . Evento (  originalEvent  ) ;
	} ,

	especial : {
		load : {

			// Evita que eventos de image.load acionados borbulhem em window.load
			noBubble : true
		} ,
		foco : {

			// Acione o evento nativo se possível para que a sequência de desfoque / foco esteja correta
			gatilho : function ( )  {
				if  (  this  ! ==  safeActiveElement ( )  &&  this . focus  )  {
					isso . foco ( ) ;
					return  false ;
				}
			} ,
			delegateType : "focusin"
		} ,
		desfocar : {
			gatilho : function ( )  {
				if  (  this  ===  safeActiveElement ( )  &&  this . blur  )  {
					isso . desfocar ( ) ;
					return  false ;
				}
			} ,
			delegateType : "focusout"
		} ,
		clique : {

			// Para a caixa de seleção, acione o evento nativo para que o estado marcado esteja correto
			gatilho : function ( )  {
				if  (  this . type  ===  "checkbox"  &&  this . click  &&  nodeName (  this ,  "input"  )  )  {
					isso . clique ( ) ;
					return  false ;
				}
			} ,

			// Para consistência entre navegadores, não dispare .click () nativo em links
			_default : function (  event  )  {
				retornar  nodeName (  evento . destino ,  "a"  ) ;
			}
		} ,

		beforeunload : {
			postDispatch : function (  event  )  {

				// Suporte: Firefox 20+
				// O Firefox não alerta se o campo returnValue não estiver definido.
				if  (  event . result  ! ==  undefined  &&  event . originalEvent  )  {
					evento . originalEvent . returnValue  =  evento . resultado ;
				}
			}
		}
	}
} ;

jQuery . removeEvent  =  function (  elem ,  type ,  handle  )  {

	// Este "se" é necessário para objetos simples
	if  (  elem . removeEventListener  )  {
		elem . removeEventListener (  tipo ,  identificador  ) ;
	}
} ;

jQuery . Evento  =  função (  src ,  adereços  )  {

	// Permitir instanciação sem a 'nova' palavra-chave
	if  (  ! (  esta  instância do  jQuery . Event  )  )  {
		retornar  novo  jQuery . Evento (  src ,  adereços  ) ;
	}

	// Event object
	if  (  src  &&  src . type  )  {
		isso . originalEvent  =  src ;
		isso . tipo  =  src . tipo ;

		// Eventos que borbulham no documento podem ter sido marcados como evitados
		// por um manipulador mais abaixo na árvore; refletem o valor correto.
		isso . isDefaultPrevented  =  src . defaultPrevented  ||
				src . defaultPrevented  ===  undefined  &&

				// Suporte: Android <= 2.3 apenas
				src . returnValue  ===  false ?
			returnTrue :
			returnFalse ;

		// Criar propriedades de destino
		// Suporte: Safari <= 6 - 7 apenas
		// O destino não deve ser um nó de texto (# 504, # 13143)
		isso . target  =  (  src . target  &&  src . target . nodeType  ===  3  ) ?
			src . alvo . parentNode :
			src . alvo ;

		isso . currentTarget  =  src . currentTarget ;
		isso . relatedTarget  =  src . relatedTarget ;

	// Tipo de evento
	}  else  {
		isso . tipo  =  src ;
	}

	// Coloque as propriedades explicitamente fornecidas no objeto de evento
	if  (  adereços  )  {
		jQuery . estender (  isto ,  adereços  ) ;
	}

	// Crie um carimbo de data / hora se o evento de entrada não tiver um
	isso . timeStamp  =  src  &&  src . timeStamp  ||  jQuery . agora ( ) ;

	// Marque como corrigido
	este [  jQuery . expando  ]  =  verdadeiro ;
} ;

// jQuery.Event é baseado em eventos DOM3 conforme especificado pelo ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery . Evento . protótipo  =  {
	construtor : jQuery . Evento ,
	isDefaultPrevented : returnFalse ,
	isPropagationStopped : returnFalse ,
	isImmediatePropagationStopped : returnFalse ,
	isSimulated : false ,

	preventDefault : function ( )  {
		var  e  =  isso . originalEvent ;

		isso . isDefaultPrevented  =  returnTrue ;

		if  (  e  &&  ! this . isSimulated  )  {
			e . preventDefault ( ) ;
		}
	} ,
	stopPropagation : function ( )  {
		var  e  =  isso . originalEvent ;

		isso . isPropagationStopped  =  returnTrue ;

		if  (  e  &&  ! this . isSimulated  )  {
			e . stopPropagation ( ) ;
		}
	} ,
	stopImmediatePropagation : function ( )  {
		var  e  =  isso . originalEvent ;

		isso . isImmediatePropagationStopped  =  returnTrue ;

		if  (  e  &&  ! this . isSimulated  )  {
			e . stopImmediatePropagation ( ) ;
		}

		isso . stopPropagation ( ) ;
	}
} ;

// Inclui todos os adereços de evento comuns, incluindo acessórios específicos de KeyEvent e MouseEvent
jQuery . cada (  {
	altKey : true ,
	bolhas : verdade ,
	cancelável : verdadeiro ,
	changesTouches : true ,
	ctrlKey : verdadeiro ,
	detalhe : verdadeiro ,
	eventPhase : true ,
	metaKey : true ,
	pageX : true ,
	pageY : true ,
	shiftKey : verdadeiro ,
	view : true ,
	"char" : verdadeiro ,
	charCode : true ,
	chave : verdadeiro ,
	keyCode : true ,
	botão : verdadeiro ,
	botões : verdadeiro ,
	clientX : true ,
	clientY : true ,
	offsetX : true ,
	offsetY : true ,
	pointerId : true ,
	pointerType : true ,
	screenX : true ,
	screenY : true ,
	targetTouches : true ,
	toElement : true ,
	toca : verdadeiro ,

	qual : função (  evento  )  {
		 botão  var =  evento . botão ;

		// Adicionar qual para eventos chave
		if  (  event . which  ==  null  &&  rkeyEvent . test (  event . type  )  )  {
			 evento de retorno . charCode  ! =  null ? evento . charCode : evento . keyCode ;
		}

		// Adicionar para clicar: 1 === left; 2 === meio; 3 === certo
		if  (  ! event . which  &&  button  ! ==  undefined  &&  rmouseEvent . test (  event . type  )  )  {
			if  (  botão  &  1  )  {
				return  1 ;
			}

			if  (  botão  e  2  )  {
				return  3 ;
			}

			if  (  botão  &  4  )  {
				return  2 ;
			}

			return  0 ;
		}

		 evento de retorno . qual ;
	}
} ,  jQuery . evento . addProp  ) ;

// Cria eventos mouseenter / leave usando mouseover / out e verificações de tempo de evento
// para que a delegação de eventos funcione no jQuery.
// Faça o mesmo para o ponteiroenter / ponteiroleave e o ponteiroover / ponteiroout
//
// Suporte: Safari 7 apenas
// Safari envia mouseenter com muita freqüência; Vejo:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// para a descrição do bug (ele existia em versões mais antigas do Chrome também).
jQuery . cada (  {
	mouseenter : "mouseover" ,
	mouseleave : "mouseout" ,
	pointerenter : "pointerover" ,
	pointerleave : "pointerout"
} ,  function (  orig ,  fix  )  {
	jQuery . evento . especial [  orig  ]  =  {
		delegateType : fix ,
		bindType : fix ,

		lidar com : função (  evento  )  {
			var  ret ,
				target  =  this ,
				relacionado  =  evento . relatedTarget ,
				handleObj  =  evento . handleObj ;

			// Para mouseenter / leave chamar o manipulador se relacionado estiver fora do destino.
			// NB: Sem relatedTarget se o mouse saiu / entrou na janela do navegador
			if  (  ! related  ||  (  related  ! ==  target  &&  ! jQuery . contains (  target ,  related  )  )  )  {
				evento . type  =  handleObj . origType ;
				ret  =  handleObj . manipulador . aplicar (  isto ,  argumentos  ) ;
				evento . type  =  fix ;
			}
			return  ret ;
		}
	} ;
}  ) ;

jQuery . fn . extend (  {

	on : função (  tipos ,  seletor ,  dados ,  fn  )  {
		retorno  on (  this ,  types ,  selector ,  data ,  fn  ) ;
	} ,
	um : função (  tipos ,  seletor ,  dados ,  fn  )  {
		retornar  em (  este ,  tipos ,  seletor ,  dados ,  fn ,  1  ) ;
	} ,
	off : função (  tipos ,  seletor ,  fn  )  {
		var  handleObj ,  digite ;
		if  (  tipos  &&  tipos . preventDefault  &&  tipos . handleObj  )  {

			// (evento) despachado jQuery.Event
			handleObj  =  tipos . handleObj ;
			jQuery (  tipos . delegateTarget  ) . desligado (
				handleObj . namespace ?
					handleObj . origType  +  "."  +  handleObj . namespace :
					handleObj . origType ,
				handleObj . seletor ,
				handleObj . manipulador
			) ;
			devolva  isso ;
		}
		if  (  typeof  types  ===  "object"  )  {

			// (objeto de tipos [, seletor])
			para  (  digite  em  tipos  )  {
				isso . desligado (  tipo ,  seletor ,  tipos [  tipo  ]  ) ;
			}
			devolva  isso ;
		}
		se  (  selector  ===  falsa  ||  typeof  selector  ===  "função"  )  {

			// (tipos [, fn])
			fn  =  seletor ;
			seletor  =  indefinido ;
		}
		if  (  fn  ===  false  )  {
			fn  =  returnFalse ;
		}
		devolva  isso . cada (  função ( )  {
			jQuery . evento . remover (  este ,  tipos ,  fn ,  seletor  ) ;
		}  ) ;
	}
}  ) ;


var

	/ * eslint-disable max-len * /

	// Veja https://github.com/eslint/eslint/issues/3229
	rxhtmlTag  =  / < (? ! area | br | col | incorporar | hr | img | entrada | ligação | meta | param ) ( ( [ az ] [ ^ \ / \ 0 > \ x 20 \ t \ r \ n \ f ] * ) [ ^> ] * ) \ / > / gi ,

	/ * eslint-enable * /

	// Suporte: IE <= 10 - 11, Edge 12 - 13
	// No IE / Edge, usar grupos regex aqui causa lentidão severa.
	// Consulte https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml  =  / <script | <estilo | <link / i ,

	// verificado = "verificado" ou verificado
	rchecked  =  / verificado \ s * (?: [ ^ = ] | = \ s * .checked. ) / i ,
	rscriptTypeMasked  =  / ^ true \ / ( . * ) / ,
	rcleanScript  =  / ^ \ s * <! (?: \ [ CDATA \ [ | - ) | (?: \] \] | - ) > \ s * $ / g ;

// Prefira um tbody em vez de sua tabela pai para conter novas linhas
function  manipulationTarget (  elem ,  content  )  {
	if  (  nodeName (  elem ,  "tabela"  )  &&
		nodeName (  content . nodeType  ! ==  11 ? content : content . firstChild ,  "tr"  )  )  {

		return  jQuery (  "> tbody" ,  elem  ) [  0  ]  ||  elem ;
	}

	return  elem ;
}

// Substitua / restaure o atributo type dos elementos do script para manipulação segura do DOM
function  disableScript (  elem  )  {
	elem . type  =  (  elem . getAttribute (  "type"  )  ! ==  null  )  +  "/"  +  elem . tipo ;
	return  elem ;
}
function  restoreScript (  elem  )  {
	var  match  =  rscriptTypeMasked . exec (  elem . tipo  ) ;

	if  (  match  )  {
		elem . tipo  =  correspondência [  1  ] ;
	}  else  {
		elem . removeAttribute (  "tipo"  ) ;
	}

	return  elem ;
}

function  cloneCopyEvent (  src ,  dest  )  {
	var  i ,  l ,  tipo ,  pdataOld ,  pdataCur ,  udataOld ,  udataCur ,  eventos ;

	if  (  dest . nodeType  ! ==  1  )  {
		retorno ;
	}

	// 1. Copiar dados privados: eventos, manipuladores, etc.
	if  (  dataPriv . hasData (  src  )  )  {
		pdataOld  =  dataPriv . acesso (  src  ) ;
		pdataCur  =  dataPriv . set (  dest ,  pdataOld  ) ;
		events  =  pdataOld . eventos ;

		if  (  eventos  )  {
			delete  pdataCur . lidar com ;
			pdataCur . eventos  =  { } ;

			para  (  digite  em  eventos  )  {
				para  (  i  =  0 ,  l  =  eventos [  tipo  ] . comprimento ;  i  <  l ;  i ++  )  {
					jQuery . evento . adicionar (  dest ,  tipo ,  eventos [  tipo  ] [  i  ]  ) ;
				}
			}
		}
	}

	// 2. Copiar dados do usuário
	if  (  dataUser . hasData (  src  )  )  {
		udataOld  =  dataUser . acesso (  src  ) ;
		udataCur  =  jQuery . extend (  { } ,  udataOld  ) ;

		dataUser . set (  dest ,  udataCur  ) ;
	}
}

// Corrija os bugs do IE, consulte os testes de suporte
function  fixInput (  src ,  dest  )  {
	var  nodeName  =  dest . nodeName . toLowerCase ( ) ;

	// Falha ao persistir o estado marcado de uma caixa de seleção ou botão de rádio clonado.
	if  (  nodeName  ===  "input"  &&  rcheckableType . test (  src . type  )  )  {
		dest . verificado  =  src . verificado ;

	// Falha ao retornar a opção selecionada ao estado padrão selecionado ao clonar opções
	}  else  if  (  nodeName  ===  "input"  ||  nodeName  ===  "textarea"  )  {
		dest . defaultValue  =  src . defaultValue ;
	}
}

function  domManip (  coleção ,  args ,  retorno de chamada ,  ignorado  )  {

	// Achatar quaisquer matrizes aninhadas
	args  =  concat . aplicar (  [ ] ,  args  ) ;

	 fragmento var ,  primeiro ,  scripts ,  hasScripts ,  nó ,  doc ,
		i  =  0 ,
		l  =  coleção . comprimento ,
		iNoClone  =  l  -  1 ,
		valor  =  args [  0  ] ,
		isFunction  =  jQuery . isFunction (  value  ) ;

	// Não podemos cloneNode fragmentos que contêm verificados, no WebKit
	if  (  isFunction  ||
			(  l  >  1  &&  typeof  value  ===  "string"  &&
				! suporte . checkClone  &&  rchecked . teste (  valor  )  )  )  {
		 coleta de retorno . cada (  função (  índice  )  {
			var  self  =  coleção . eq (  índice  ) ;
			if  (  isFunction  )  {
				args [  0  ]  =  valor . call (  this ,  index ,  self . html ( )  ) ;
			}
			domManip (  self ,  args ,  callback ,  ignorado  ) ;
		}  ) ;
	}

	if  (  l  )  {
		fragment  =  buildFragment (  args ,  coleção [  0  ] . ownerDocument ,  false ,  coleção ,  ignorado  ) ;
		primeiro  =  fragmento . firstChild ;

		if  (  fragmento . childNodes . comprimento  ===  1  )  {
			fragmento  =  primeiro ;
		}

		// Requer novo conteúdo ou interesse em elementos ignorados para invocar o retorno de chamada
		if  (  primeiro  ||  ignorado  )  {
			scripts  =  jQuery . map (  getAll (  fragmento ,  "script"  ) ,  disableScript  ) ;
			hasScripts  =  scripts . comprimento ;

			// Use o fragmento original para o último item
			// em vez do primeiro porque pode acabar
			// sendo esvaziado incorretamente em certas situações (# 8070).
			para  (  ;  i  <  l ;  i ++  )  {
				nó  =  fragmento ;

				if  (  i  ! ==  iNoClone  )  {
					node  =  jQuery . clone (  nó ,  verdadeiro ,  verdadeiro  ) ;

					// Mantenha as referências aos scripts clonados para restauração posterior
					if  (  hasScripts  )  {

						// Suporte: Android <= 4.0 apenas, PhantomJS 1 apenas
						// push.apply (_, arraylike) lança no antigo WebKit
						jQuery . mesclar (  scripts ,  getAll (  nó ,  "script"  )  ) ;
					}
				}

				retorno de chamada . chamada (  coleção [  i  ] ,  nó ,  i  ) ;
			}

			if  (  hasScripts  )  {
				doc  =  scripts [  scripts . comprimento  -  1  ] . ownerDocument ;

				// Reativar scripts
				jQuery . mapa (  scripts ,  restoreScript  ) ;

				// Avalie os scripts executáveis ​​na primeira inserção do documento
				para  (  i  =  0 ;  i  <  hasScripts ;  i ++  )  {
					nó  =  scripts [  i  ] ;
					if  (  rscriptType . test (  node . type  ||  ""  )  &&
						! dataPriv . acesso (  nó ,  "globalEval"  )  &&
						jQuery . contém (  doc ,  nó  )  )  {

						if  (  nó . src  )  {

							// Dependência AJAX opcional, mas não executará scripts se não estiver presente
							if  (  jQuery . _evalUrl  )  {
								jQuery . _evalUrl (  node . src  ) ;
							}
						}  else  {
							DOMEval (  nó . TextContent . Substituir (  rcleanScript ,  ""  ) ,  doc  ) ;
						}
					}
				}
			}
		}
	}

	 coleta de retorno ;
}

function  remove (  elem ,  selector ,  keepData  )  {
	 nó var ,
		nodes  =  seletor ? jQuery . filtro (  seletor ,  elem  ) : elem ,
		i  =  0 ;

	para  (  ;  (  nó  =  nós [  i  ]  )  ! =  nulo ;  i ++  )  {
		if  (  ! keepData  &&  node . nodeType  ===  1  )  {
			jQuery . cleanData (  getAll (  nó  )  ) ;
		}

		if  (  nó . parentNode  )  {
			if  (  keepData  &&  jQuery . contains (  node . ownerDocument ,  node  )  )  {
				setGlobalEval (  getAll (  node ,  "script"  )  ) ;
			}
			nó . parentNode . removeChild (  nó  ) ;
		}
	}

	return  elem ;
}

jQuery . extend (  {
	htmlPrefilter : function (  html  )  {
		return  html . substituir (  rxhtmlTag ,  "<$ 1> </ $ 2>"  ) ;
	} ,

	clone : function (  elem ,  dataAndEvents ,  deepDataAndEvents  )  {
		var  i ,  l ,  srcElements ,  destElements ,
			clone  =  elem . cloneNode (  true  ) ,
			inPage  =  jQuery . contém (  elem . ownerDocument ,  elem  ) ;

		// Corrige problemas de clonagem do IE
		if  (  ! support . noCloneChecked  &&  (  elem . nodeType  ===  1  ||  elem . nodeType  ===  11  )  &&
				! jQuery . isXMLDoc (  elem  )  )  {

			// Evitamos o Sizzle aqui por motivos de desempenho: https://jsperf.com/getall-vs-sizzle/2
			destElements  =  getAll (  clone  ) ;
			srcElements  =  getAll (  elem  ) ;

			para  (  i  =  0 ,  l  =  srcElements . length ;  i  <  l ;  i ++  )  {
				fixInput (  srcElements [  i  ] ,  destElements [  i  ]  ) ;
			}
		}

		// Copia os eventos do original para o clone
		if  (  dataAndEvents  )  {
			if  (  deepDataAndEvents  )  {
				srcElements  =  srcElements  ||  getAll (  elem  ) ;
				destElements  =  destElements  ||  getAll (  clone  ) ;

				para  (  i  =  0 ,  l  =  srcElements . length ;  i  <  l ;  i ++  )  {
					cloneCopyEvent (  srcElements [  i  ] ,  destElements [  i  ]  ) ;
				}
			}  else  {
				cloneCopyEvent (  elem ,  clone  ) ;
			}
		}

		// Preserve o histórico de avaliação do script
		destElements  =  getAll (  clone ,  "script"  ) ;
		if  (  destElements . length  >  0  )  {
			setGlobalEval (  destElements ,  ! InPage  &&  getAll (  elem ,  "script"  )  ) ;
		}

		// Retorna o conjunto clonado
		retornar  clone ;
	} ,

	cleanData : function (  elems  )  {
		 dados var ,  elem ,  tipo ,
			especial  =  jQuery . evento . especial ,
			i  =  0 ;

		for  (  ;  (  elem  =  elems [  i  ]  )  ! ==  indefinido ;  i ++  )  {
			if  (  acceptData (  elem  )  )  {
				if  (  (  dados  =  elem [  dataPriv . expando  ]  )  )  {
					if  (  dados . eventos  )  {
						para  (  digite  em  dados . eventos  )  {
							if  (  especial [  tipo  ]  )  {
								jQuery . evento . remover (  elem ,  tipo  ) ;

							// Este é um atalho para evitar sobrecarga de jQuery.event.remove
							}  else  {
								jQuery . removeEvent (  elem ,  tipo ,  dados . identificador  ) ;
							}
						}
					}

					// Suporte: Chrome <= 35 - 45+
					// Atribuir undefined em vez de usar delete, consulte Data # remove
					elem [  dataPriv . expando  ]  =  indefinido ;
				}
				if  (  elem [  dataUser . expando  ]  )  {

					// Suporte: Chrome <= 35 - 45+
					// Atribuir undefined em vez de usar delete, consulte Data # remove
					elem [  dataUser . expando  ]  =  indefinido ;
				}
			}
		}
	}
}  ) ;

jQuery . fn . extend (  {
	desanexar : função (  seletor  )  {
		return  remove (  this ,  selector ,  true  ) ;
	} ,

	remove : function (  selector  )  {
		return  remove (  this ,  selector  ) ;
	} ,

	text : function (  value  )  {
		 acesso de retorno (  isto ,  função (  valor  )  {
			 valor de  retorno ===  indefinido ?
				jQuery . texto (  este  ) :
				isso . vazio ( ) . cada (  função ( )  {
					if  (  this . nodeType  ===  1  ||  this . nodeType  ===  11  ||  this . nodeType  ===  9  )  {
						isso . textContent  =  value ;
					}
				}  ) ;
		} ,  nulo ,  valor ,  argumentos . comprimento  ) ;
	} ,

	append : function ( )  {
		retornar  domManip (  isto ,  argumentos ,  função (  elem  )  {
			if  (  this . nodeType  ===  1  ||  this . nodeType  ===  11  ||  this . nodeType  ===  9  )  {
				var  target  =  manipulationTarget (  this ,  elem  ) ;
				alvo . appendChild (  elem  ) ;
			}
		}  ) ;
	} ,

	prepend : function ( )  {
		retornar  domManip (  isto ,  argumentos ,  função (  elem  )  {
			if  (  this . nodeType  ===  1  ||  this . nodeType  ===  11  ||  this . nodeType  ===  9  )  {
				var  target  =  manipulationTarget (  this ,  elem  ) ;
				alvo . insertBefore (  elem ,  destino . firstChild  ) ;
			}
		}  ) ;
	} ,

	antes : function ( )  {
		retornar  domManip (  isto ,  argumentos ,  função (  elem  )  {
			if  (  this . parentNode  )  {
				isso . parentNode . insertBefore (  elem ,  este  ) ;
			}
		}  ) ;
	} ,

	depois : função ( )  {
		retornar  domManip (  isto ,  argumentos ,  função (  elem  )  {
			if  (  this . parentNode  )  {
				isso . parentNode . insertBefore (  elem ,  this . nextSibling  ) ;
			}
		}  ) ;
	} ,

	vazio : function ( )  {
		var  elem ,
			i  =  0 ;

		para  (  ;  (  elem  =  este [  i  ]  )  ! =  nulo ;  i ++  )  {
			if  (  elem . nodeType  ===  1  )  {

				// Previne vazamentos de memória
				jQuery . cleanData (  getAll (  elem ,  false  )  ) ;

				// Remova todos os nós restantes
				elem . textContent  =  "" ;
			}
		}

		devolva  isso ;
	} ,

	clone : function (  dataAndEvents ,  deepDataAndEvents  )  {
		dataAndEvents  =  dataAndEvents  ==  null ? falso : dataAndEvents ;
		deepDataAndEvents  =  deepDataAndEvents  ==  null ? dataAndEvents : deepDataAndEvents ;

		devolva  isso . map (  function ( )  {
			return  jQuery . clone (  this ,  dataAndEvents ,  deepDataAndEvents  ) ;
		}  ) ;
	} ,

	html : function (  value  )  {
		 acesso de retorno (  isto ,  função (  valor  )  {
			var  elem  =  este [  0  ]  ||  { } ,
				i  =  0 ,
				l  =  isso . comprimento ;

			if  (  valor  ===  undefined  &&  elem . nodeType  ===  1  )  {
				return  elem . innerHTML ;
			}

			// Veja se podemos pegar um atalho e apenas usar innerHTML
			if  (  typeof  value  ===  "string"  &&  ! rnoInnerhtml . test (  value  )  &&
				! wrapMap [  (  rtagName . exec (  value  )  ||  [  "" ,  ""  ]  ) [  1  ] . toLowerCase ( )  ]  )  {

				valor  =  jQuery . htmlPrefilter (  valor  ) ;

				tente  {
					para  (  ;  i  <  l ;  i ++  )  {
						elem  =  este [  i  ]  ||  { } ;

						// Remova os nós do elemento e evite vazamentos de memória
						if  (  elem . nodeType  ===  1  )  {
							jQuery . cleanData (  getAll (  elem ,  false  )  ) ;
							elem . innerHTML  =  value ;
						}
					}

					elem  =  0 ;

				// Se o uso de innerHTML gerar uma exceção, use o método de fallback
				}  catch  (  e  )  { }
			}

			if  (  elem  )  {
				isso . vazio ( ) . anexar (  valor  ) ;
			}
		} ,  nulo ,  valor ,  argumentos . comprimento  ) ;
	} ,

	replaceWith : function ( )  {
		var  ignorado  =  [ ] ;

		// Faça as alterações, substituindo cada elemento de contexto não ignorado pelo novo conteúdo
		retornar  domManip (  isto ,  argumentos ,  função (  elem  )  {
			var  parent  =  this . parentNode ;

			if  (  jQuery . inArray (  this ,  ignorado  )  <  0  )  {
				jQuery . cleanData (  getAll (  this  )  ) ;
				if  (  pai  )  {
					pai . substituirChild (  elem ,  este  ) ;
				}
			}

		// Forçar chamada de retorno
		} ,  ignorado  ) ;
	}
}  ) ;

jQuery . cada (  {
	appendTo : "append" ,
	prependTo : " prepend " ,
	insertBefore : "antes" ,
	insertAfter : "depois" ,
	replaceAll : "replaceWith"
} ,  função (  nome ,  original  )  {
	jQuery . fn [  nome  ]  =  função (  seletor  )  {
		var  elems ,
			ret  =  [ ] ,
			insert  =  jQuery (  seletor  ) ,
			último  =  inserir . comprimento  -  1 ,
			i  =  0 ;

		para  (  ;  i  <=  último ;  i ++  )  {
			elems  =  i  ===  último ? isso : isso . clone (  verdadeiro  ) ;
			jQuery (  inserir [  i  ]  ) [  original  ] (  elems  ) ;

			// Suporte: Android <= 4.0 apenas, PhantomJS 1 apenas
			// .get () porque push.apply (_, arraylike) lança um antigo WebKit
			empurre . aplicar (  ret ,  elems . get ( )  ) ;
		}

		devolva  isso . pushStack (  ret  ) ;
	} ;
}  ) ;
var  rmargin  =  (  / ^ margem /  ) ;

var  rnumnonpx  =  new  RegExp (  "^ ("  +  pnum  +  ") (?! px) [az%] + $" ,  "i"  ) ;

var  getStyles  =  function (  elem  )  {

		// Suporte: IE <= 11 apenas, Firefox <= 30 (# 15098, # 14150)
		// IE lança elementos criados em pop-ups
		// FF, entretanto, lança elementos de quadro por meio de "defaultView.getComputedStyle"
		var  view  =  elem . ownerDocument . defaultView ;

		if  (  ! view  ||  ! view . opener  )  {
			view  =  janela ;
		}

		 vista de retorno . getComputedStyle (  elem  ) ;
	} ;



(  função ( )  {

	// A execução de testes pixelPosition e boxSizingReliable exige apenas um layout
	// então eles são executados ao mesmo tempo para salvar o segundo cálculo.
	function  computeStyleTests ( )  {

		// Este é um singleton, precisamos executá-lo apenas uma vez
		if  (  ! div  )  {
			retorno ;
		}

		div . estilo . cssText  =
			"tamanho da caixa: caixa da borda;"  +
			"posição: relativa; exibição: bloco;"  +
			"margin: auto; border: 1px; padding: 1px;"  +
			"superior: 1%; largura: 50%" ;
		div . innerHTML  =  "" ;
		documentElement . appendChild (  contêiner  ) ;

		var  divStyle  =  window . getComputedStyle (  div  ) ;
		pixelPositionVal  =  divStyle . topo  ! ==  "1%" ;

		// Suporte: Android 4.0 - 4.3 apenas, Firefox <= 3 - 44
		confiávelMarginLeftVal  =  divStyle . marginLeft  ===  "2px" ;
		boxSizingReliableVal  =  divStyle . largura  ===  "4px" ;

		// Suporte: Android 4.0 - 4.3 apenas
		// Alguns estilos voltam com valores percentuais, embora não devessem
		div . estilo . marginRight  =  "50%" ;
		pixelMarginRightVal  =  divStyle . marginRight  ===  "4px" ;

		documentElement . removeChild (  contêiner  ) ;

		// Anula o div para que não seja armazenado na memória e
		// também será um sinal de que as verificações já realizadas
		div  =  null ;
	}

	var  pixelPositionVal ,  boxSizingReliableVal ,  pixelMarginRightVal ,  reliableMarginLeftVal ,
		container  =  document . createElement (  "div"  ) ,
		div  =  document . createElement (  "div"  ) ;

	// Concluir cedo em ambientes limitados (sem navegador)
	if  (  ! div . style  )  {
		retorno ;
	}

	// Suporte: IE <= 9 - 11 apenas
	// O estilo do elemento clonado afeta o elemento de origem clonado (# 8908)
	div . estilo . backgroundClip  =  "caixa de conteúdo" ;
	div . cloneNode (  verdadeiro  ) . estilo . backgroundClip  =  "" ;
	suporte . clearCloneStyle  =  div . estilo . backgroundClip  ===  "content-box" ;

	recipiente . estilo . cssText  =  "borda: 0; largura: 8 px; altura: 0; topo: 0; esquerda: -9999 px;"  +
		"preenchimento: 0; margem superior: 1px; posição: absoluta" ;
	recipiente . appendChild (  div  ) ;

	jQuery . extender (  suporte ,  {
		pixelPosition : function ( )  {
			computeStyleTests ( ) ;
			return  pixelPositionVal ;
		} ,
		boxSizingReliable : function ( )  {
			computeStyleTests ( ) ;
			return  boxSizingReliableVal ;
		} ,
		pixelMarginRight : function ( )  {
			computeStyleTests ( ) ;
			return  pixelMarginRightVal ;
		} ,
		confiávelMarginLeft : function ( )  {
			computeStyleTests ( ) ;
			return  confiávelMarginLeftVal ;
		}
	}  ) ;
}  ) ( ) ;


função  curCSS (  elem ,  nome ,  calculado  )  {
	var  width ,  minWidth ,  maxWidth ,  ret ,

		// Suporte: Firefox 51+
		// Recuperando o estilo antes de ser calculado de alguma forma
		// corrige um problema de obtenção de valores errados
		// em elementos separados
		estilo  =  elem . estilo ;

	computado  =  computado  ||  getStyles (  elem  ) ;

	// getPropertyValue é necessário para:
	// .css ('filtro') (somente IE 9, # 12537)
	// .css ('- customProperty) (# 3144)
	if  (  calculado  )  {
		ret  =  calculado . getPropertyValue (  name  )  ||  computado [  nome  ] ;

		if  (  ret  ===  ""  &&  ! jQuery . contém (  elem . ownerDocument ,  elem  )  )  {
			ret  =  jQuery . estilo (  elem ,  nome  ) ;
		}

		// Um ​​tributo ao "hack incrível de Dean Edwards"
		// O navegador Android retorna a porcentagem para alguns valores,
		// mas a largura parece ser pixels confiáveis.
		// Isso vai contra a especificação de rascunho do CSSOM:
		// https://drafts.csswg.org/cssom/#resolved-values
		if  (  ! support . pixelMarginRight ( )  &&  rnumnonpx . test (  ret  )  &&  rmargin . test (  name  )  )  {

			// Lembre-se dos valores originais
			largura  =  estilo . largura ;
			minWidth  =  style . minWidth ;
			maxWidth  =  style . maxWidth ;

			// Insira os novos valores para obter um valor calculado
			estilo . minWidth  =  style . maxWidth  =  style . largura  =  ret ;
			ret  =  calculado . largura ;

			// Reverter os valores alterados
			estilo . largura  =  largura ;
			estilo . minWidth  =  minWidth ;
			estilo . maxWidth  =  maxWidth ;
		}
	}

	return  ret  ! ==  undefined ?

		// Suporte: IE <= 9 - 11 apenas
		// IE retorna o valor zIndex como um inteiro.
		ret  +  "" :
		ret ;
}


function  addGetHookIf (  conditionFn ,  hookFn  )  {

	// Defina o gancho, verificaremos na primeira execução se ele é realmente necessário.
	return  {
		get : function ( )  {
			if  (  conditionFn ( )  )  {

				// Gancho não necessário (ou não é possível usá-lo devido
				// para a dependência ausente), remova-a.
				exclua  isso . obter ;
				retorno ;
			}

			// Hook needed; redefina-o para que o teste de suporte não seja executado novamente.
			return  (  this . get  =  hookFn  ) . aplicar (  isto ,  argumentos  ) ;
		}
	} ;
}


var

	// Trocável se a exibição for nenhuma ou começar com a tabela
	// exceto "tabela", "célula da tabela" ou "legenda da tabela"
	// Veja aqui os valores de exibição: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap  =  / ^ ( none | table (? ! -c [ ea ] ) . + ) / ,
	rcustomProp  =  / ^ - / ,
	cssShow  =  {  posição : "absoluto" ,  visibilidade : "oculto" ,  exibição : "bloquear"  } ,
	cssNormalTransform  =  {
		letterSpacing : "0" ,
		fontWeight : "400"
	} ,

	cssPrefixes  =  [  "Webkit" ,  "Moz" ,  "ms"  ] ,
	emptyStyle  =  documento . createElement (  "div"  ) . estilo ;

// Retorna uma propriedade css mapeada para uma propriedade prefixada potencialmente do fornecedor
function  vendorPropName (  name  )  {

	// Atalho para nomes que não são prefixados pelo fornecedor
	if  (  nome  em  emptyStyle  )  {
		 nome de retorno ;
	}

	// Verifique os nomes prefixados do fornecedor
	var  capName  =  nome [  0  ] . toUpperCase ( )  +  nome . fatia (  1  ) ,
		i  =  cssPrefixes . comprimento ;

	enquanto  (  i -  )  {
		name  =  cssPrefixes [  i  ]  +  capName ;
		if  (  nome  em  emptyStyle  )  {
			 nome de retorno ;
		}
	}
}

// Retorna uma propriedade mapeada junto com o que jQuery.cssProps sugere ou para
// uma propriedade prefixada do fornecedor.
function  finalPropName (  name  )  {
	var  ret  =  jQuery . cssProps [  nome  ] ;
	if  (  ! ret  )  {
		ret  =  jQuery . cssProps [  nome  ]  =  vendorPropName (  nome  )  ||  nome ;
	}
	return  ret ;
}

function  setPositiveNumber (  elem ,  valor ,  subtrair  )  {

	// Quaisquer valores relativos (+/-) já foram
	// normalizado neste ponto
	var  corresponde  =  rcssNum . exec (  valor  ) ;
	retornar  partidas ?

		// Protege contra "subtrair" indefinido, por exemplo, quando usado como em cssHooks
		Matemática . max (  0 ,  corresponde a [  2  ]  -  (  subtrair  ||  0  )  )  +  (  corresponde a [  3  ]  ||  "px"  ) :
		valor ;
}

function  augmentWidthOrHeight (  elem ,  nome ,  extra ,  isBorderBox ,  estilos  )  {
	var  i ,
		val  =  0 ;

	// Se já tivermos a medida certa, evite o aumento
	if  (  extra  ===  (  isBorderBox ? "border" : "content"  )  )  {
		i  =  4 ;

	// Caso contrário, inicializar para propriedades horizontais ou verticais
	}  else  {
		i  =  nome  ===  "largura" ? 1 : 0 ;
	}

	para  (  ;  i  <  4 ;  i  + =  2  )  {

		// Ambos os modelos de caixa excluem margem, portanto, adicione-a se quisermos
		if  (  extra  ===  "margem"  )  {
			val  + =  jQuery . css (  elem ,  extra  +  cssExpand [  i  ] ,  true ,  estilos  ) ;
		}

		if  (  isBorderBox  )  {

			// border-box inclui preenchimento, então remova-o se quisermos conteúdo
			if  (  extra  ===  "conteúdo"  )  {
				val  - =  jQuery . css (  elem ,  "preenchimento"  +  cssExpand [  i  ] ,  verdadeiro ,  estilos  ) ;
			}

			// Neste ponto, o extra não é borda nem margem, então remova a borda
			if  (  extra  ! ==  "margem"  )  {
				val  - =  jQuery . css (  elem ,  "borda"  +  cssExpand [  i  ]  +  "Largura" ,  verdadeiro ,  estilos  ) ;
			}
		}  else  {

			// Neste ponto, o extra não é conteúdo, então adicione preenchimento
			val  + =  jQuery . css (  elem ,  "preenchimento"  +  cssExpand [  i  ] ,  verdadeiro ,  estilos  ) ;

			// Neste ponto, extra não é conteúdo nem preenchimento, então adicione borda
			if  (  extra  ! ==  "padding"  )  {
				val  + =  jQuery . css (  elem ,  "borda"  +  cssExpand [  i  ]  +  "Largura" ,  verdadeiro ,  estilos  ) ;
			}
		}
	}

	return  val ;
}

function  getWidthOrHeight (  elem ,  nome ,  extra  )  {

	// Comece com o estilo calculado
	var  valueIsBorderBox ,
		styles  =  getStyles (  elem  ) ,
		val  =  curCSS (  elem ,  nome ,  estilos  ) ,
		isBorderBox  =  jQuery . css (  elem ,  "boxSizing" ,  false ,  styles  )  ===  "border-box" ;

	// A unidade computada não é pixels. Pare aqui e volte.
	if  (  rnumnonpx . test (  val  )  )  {
		return  val ;
	}

	// Verifique o estilo no caso de um navegador que retorna valores não confiáveis
	// para getComputedStyle silenciosamente volta para o elem.style confiável
	valueIsBorderBox  =  isBorderBox  &&
		(  suporte . boxSizingReliable ( )  ||  val  ===  elem . estilo [  nome  ]  ) ;

	// Retorne para offsetWidth / Height quando o valor for "auto"
	// Isso acontece para elementos embutidos sem configuração explícita (gh-3571)
	if  (  val  ===  "auto"  )  {
		val  =  elem [  "deslocamento"  +  nome [  0  ] . toUpperCase ( )  +  nome . fatia (  1  )  ] ;
	}

	// Normaliza "", auto, e prepara para extra
	val  =  parseFloat (  val  )  ||  0 ;

	// Use o modelo de dimensionamento de caixa ativo para adicionar / subtrair estilos irrelevantes
	return  (  val  +
		augmentWidthOrHeight (
			elem ,
			nome ,
			extra  ||  (  isBorderBox ? "border" : "content"  ) ,
			valueIsBorderBox ,
			estilos
		)
	)  +  "px" ;
}

jQuery . extend (  {

	// Adicionar ganchos de propriedade de estilo para substituir o padrão
	// comportamento de obtenção e definição de uma propriedade de estilo
	cssHooks : {
		opacidade : {
			get : function (  elem ,  computed  )  {
				if  (  calculado  )  {

					// Devemos sempre obter um número de volta da opacidade
					var  ret  =  curCSS (  elem ,  "opacidade"  ) ;
					return  ret  ===  "" ? "1" : ret ;
				}
			}
		}
	} ,

	// Não adicione automaticamente "px" a essas propriedades possivelmente sem unidade
	cssNumber : {
		"animationIterationCount" : true ,
		"columnCount" : verdadeiro ,
		"fillOpacity" : verdadeiro ,
		"flexGrow" : verdadeiro ,
		"flexShrink" : verdadeiro ,
		"fontWeight" : verdadeiro ,
		"lineHeight" : verdadeiro ,
		"opacidade" : verdadeiro ,
		"pedido" : verdadeiro ,
		"órfãos" : verdadeiro ,
		"viúvas" : verdade ,
		"zIndex" : verdadeiro ,
		"zoom" : verdadeiro
	} ,

	// Adicione propriedades cujos nomes você deseja corrigir antes
	// definindo ou obtendo o valor
	cssProps : {
		"float" : "cssFloat"
	} ,

	// Obtenha e defina a propriedade de estilo em um nó DOM
	estilo : função (  elem ,  nome ,  valor ,  extra  )  {

		// Não defina estilos em nós de texto e comentário
		if  (  ! elem  ||  elem . nodeType  ===  3  ||  elem . nodeType  ===  8  ||  ! elem . style  )  {
			retorno ;
		}

		// Certifique-se de que estamos trabalhando com o nome certo
		var  ret ,  tipo ,  ganchos ,
			origName  =  jQuery . camelCase (  nome  ) ,
			isCustomProp  =  rcustomProp . teste (  nome  ) ,
			estilo  =  elem . estilo ;

		// Certifique-se de que estamos trabalhando com o nome certo. Nós não
		// deseja consultar o valor se for uma propriedade personalizada CSS
		// já que eles são definidos pelo usuário.
		if  (  ! isCustomProp  )  {
			nome  =  finalPropName (  origName  ) ;
		}

		// Obtém gancho para a versão prefixada e, em seguida, versão não prefixada
		ganchos  =  jQuery . cssHooks [  nome  ]  ||  jQuery . cssHooks [  origName  ] ;

		// Verifique se estamos definindo um valor
		if  (  value  ! ==  undefined  )  {
			type  =  typeof  value ;

			// Converta "+ =" ou "- =" em números relativos (# 7345)
			if  (  type  ===  "string"  &&  (  ret  =  rcssNum . exec (  value  )  )  &&  ret [  1  ]  )  {
				valor  =  ajustar CSS (  elem ,  nome ,  ret  ) ;

				// Corrige bug # 9237
				tipo  =  "número" ;
			}

			// Certifique-se de que os valores null e NaN não estão definidos (# 7116)
			if  (  valor  ==  nulo  ||  valor  ! ==  valor  )  {
				retorno ;
			}

			// Se um número foi passado, adicione a unidade (exceto para certas propriedades CSS)
			if  (  digite  ===  "número"  )  {
				valor  + =  ret  &&  ret [  3  ]  ||  (  jQuery . cssNumber [  origName  ] ? "" : "px"  ) ;
			}

			// background- * props afetam os valores do clone original
			if  (  ! support . clearCloneStyle  &&  value  ===  ""  &&  name . indexOf (  "background"  )  ===  0  )  {
				estilo [  nome  ]  =  "herdar" ;
			}

			// Se um gancho foi fornecido, use esse valor, caso contrário, apenas defina o valor especificado
			if  (  ! hooks  ||  ! (  "set"  in  hooks  )  ||
				(  valor  =  ganchos . set (  elem ,  valor ,  extra  )  )  ! ==  undefined  )  {

				if  (  isCustomProp  )  {
					estilo . setProperty (  nome ,  valor  ) ;
				}  else  {
					estilo [  nome  ]  =  valor ;
				}
			}

		}  else  {

			// Se um gancho foi fornecido, obtém o valor não calculado de lá
			if  (  conecta  &&  "get"  em  ganchos  &&
				(  ret  =  ganchos . get (  elem ,  false ,  extra  )  )  ! ==  undefined  )  {

				return  ret ;
			}

			// Caso contrário, apenas obtenha o valor do objeto de estilo
			 estilo de retorno [  nome  ] ;
		}
	} ,

	css : função (  elem ,  nome ,  extra ,  estilos  )  {
		var  val ,  num ,  hooks ,
			origName  =  jQuery . camelCase (  nome  ) ,
			isCustomProp  =  rcustomProp . teste (  nome  ) ;

		// Certifique-se de que estamos trabalhando com o nome certo. Nós não
		// deseja modificar o valor se for uma propriedade personalizada CSS
		// já que eles são definidos pelo usuário.
		if  (  ! isCustomProp  )  {
			nome  =  finalPropName (  origName  ) ;
		}

		// Experimente o nome com prefixo seguido pelo nome sem prefixo
		ganchos  =  jQuery . cssHooks [  nome  ]  ||  jQuery . cssHooks [  origName  ] ;

		// Se um gancho foi fornecido, obtenha o valor calculado a partir daí
		if  (  hooks  &&  "get"  in  hooks  )  {
			val  =  ganchos . get (  elem ,  true ,  extra  ) ;
		}

		// Caso contrário, se houver uma maneira de obter o valor calculado, use esse
		if  (  val  ===  undefined  )  {
			val  =  curCSS (  elem ,  nome ,  estilos  ) ;
		}

		// Converta "normal" em valor calculado
		if  (  val  ===  "normal"  &&  nome  em  cssNormalTransform  )  {
			val  =  cssNormalTransform [  nome  ] ;
		}

		// Torna numérico se forçado ou um qualificador foi fornecido e val parece numérico
		if  (  extra  ===  ""  ||  extra  )  {
			num  =  parseFloat (  val  ) ;
			return  extra  ===  true  ||  isFinite (  num  ) ? num  ||  0 : val ;
		}

		return  val ;
	}
}  ) ;

jQuery . cada (  [  "altura" ,  "largura"  ] ,  função (  i ,  nome  )  {
	jQuery . cssHooks [  nome  ]  =  {
		get : function (  elem ,  computed ,  extra  )  {
			if  (  calculado  )  {

				// Certos elementos podem ter informações de dimensão se os mostrarmos invisivelmente
				// mas deve ter um estilo de exibição atual que se beneficiaria
				return  rdisplayswap . teste (  jQuery . css (  elem ,  "display"  )  )  &&

					// Suporte: Safari 8+
					// As colunas da tabela no Safari têm offsetWidth diferente de zero e zero
					// getBoundingClientRect (). width a menos que a exibição seja alterada.
					// Suporte: IE <= 11 apenas
					// Executando getBoundingClientRect em um nó desconectado
					// no IE lança um erro.
					(  ! elem . getClientRects ( ) . length  ||  ! elem . getBoundingClientRect ( ) . width  ) ?
						swap (  elem ,  cssShow ,  function ( )  {
							return  getWidthOrHeight (  elem ,  nome ,  extra  ) ;
						}  ) :
						getWidthOrHeight (  elem ,  nome ,  extra  ) ;
			}
		} ,

		conjunto : função (  elem ,  valor ,  extra  )  {
			var  corresponde ,
				styles  =  extra  &&  getStyles (  elem  ) ,
				subtrair  =  extra  &&  augmentWidthOrHeight (
					elem ,
					nome ,
					extra ,
					jQuery . css (  elem ,  "boxSizing" ,  false ,  styles  )  ===  "border-box" ,
					estilos
				) ;

			// Converta para pixels se o ajuste de valor for necessário
			se  (  subtrair  &&  (  partidas  =  rcssNum . exec (  valor  )  )  &&
				(  corresponde a [  3  ]  ||  "px"  )  ! ==  "px"  )  {

				elem . estilo [  nome  ]  =  valor ;
				valor  =  jQuery . css (  elem ,  nome  ) ;
			}

			retornar  setPositiveNumber (  elem ,  valor ,  subtrair  ) ;
		}
	} ;
}  ) ;

jQuery . cssHooks . marginLeft  =  addGetHookIf (  suporte . confiávelMarginLeft ,
	função (  elem ,  calculado  )  {
		if  (  calculado  )  {
			return  (  parseFloat (  curCSS (  elem ,  "marginLeft"  )  )  ||
				elem . getBoundingClientRect ( ) . esquerda  -
					swap (  elem ,  {  marginLeft : 0  } ,  function ( )  {
						return  elem . getBoundingClientRect ( ) . esquerda ;
					}  )
				)  +  "px" ;
		}
	}
) ;

// Esses ganchos são usados ​​pelo animate para expandir as propriedades
jQuery . cada (  {
	margem : "" ,
	preenchimento : "" ,
	borda : "largura"
} ,  função (  prefixo ,  sufixo  )  {
	jQuery . cssHooks [  prefixo  +  sufixo  ]  =  {
		expandir : função (  valor  )  {
			var  i  =  0 ,
				expandido  =  { } ,

				// Assume um único número, se não uma string
				parts  =  typeof  value  ===  "string" ? valor . dividir (  ""  ) : [  valor  ] ;

			para  (  ;  i  <  4 ;  i ++  )  {
				expandido [  prefixo  +  cssExpand [  i  ]  +  sufixo  ]  =
					partes [  i  ]  ||  partes [  i  -  2  ]  ||  partes [  0  ] ;
			}

			retorno  expandido ;
		}
	} ;

	if  (  ! rmargin . test (  prefixo  )  )  {
		jQuery . cssHooks [  prefixo  +  sufixo  ] . set  =  setPositiveNumber ;
	}
}  ) ;

jQuery . fn . extend (  {
	css : função (  nome ,  valor  )  {
		 acesso de retorno (  this ,  function (  elem ,  name ,  value  )  {
			var  styles ,  len ,
				map  =  { } ,
				i  =  0 ;

			if  (  Array . isArray (  nome  )  )  {
				estilos  =  getStyles (  elem  ) ;
				len  =  nome . comprimento ;

				para  (  ;  i  <  len ;  i ++  )  {
					mapa [  nome [  i  ]  ]  =  jQuery . css (  elem ,  nome [  i  ] ,  falso ,  estilos  ) ;
				}

				 mapa de retorno ;
			}

			 valor de  retorno ! ==  indefinido ?
				jQuery . estilo (  elem ,  nome ,  valor  ) :
				jQuery . css (  elem ,  nome  ) ;
		} ,  nome ,  valor ,  argumentos . comprimento  >  1  ) ;
	}
}  ) ;


função  Tween (  elem ,  opções ,  prop ,  fim ,  atenuação  )  {
	retornar  novo  Tween . protótipo . init (  elem ,  opções ,  prop ,  final ,  atenuação  ) ;
}
jQuery . Tween  =  Tween ;

Tween . protótipo  =  {
	construtor : Tween ,
	init : function (  elem ,  options ,  prop ,  end ,  easing ,  unit  )  {
		isso . elem  =  elem ;
		isso . prop  =  prop ;
		isso . atenuação  =  atenuação  ||  jQuery . atenuação . _default ;
		isso . opções  =  opções ;
		isso . start  =  this . agora  =  isso . cur ( ) ;
		isso . fim  =  fim ;
		isso . unidade  =  unidade  ||  (  jQuery . cssNumber [  prop  ] ? "" : "px"  ) ;
	} ,
	cur : function ( )  {
		var  hooks  =  Tween . propHooks [  isso . prop  ] ;

		return  hooks  &&  hooks . pegar ?
			ganchos . obter (  isto  ) :
			Tween . propHooks . _default . obter (  isso  ) ;
	} ,
	run : function (  percent  )  {
		var  facilitado ,
			ganchos  =  Tween . propHooks [  isso . prop  ] ;

		if  (  this . options . duration  )  {
			isso . pos  =  atenuado  =  jQuery . facilitando [  isso . atenuação  ] (
				por cento ,  isso . opções . duração  *  por cento ,  0 ,  1 ,  isso . opções . duração
			) ;
		}  else  {
			isso . pos  =  atenuado  =  porcentagem ;
		}
		isso . now  =  (  this . end  -  this . start  )  *  facilitado  +  this . começar ;

		if  (  this . options . step  )  {
			isso . opções . passo . chamar (  isto . elem ,  isto . agora ,  isto  ) ;
		}

		if  (  hooks  &&  hooks . set  )  {
			ganchos . definir (  isso  ) ;
		}  else  {
			Tween . propHooks . _default . definir (  isso  ) ;
		}
		devolva  isso ;
	}
} ;

Tween . protótipo . init . protótipo  =  Tween . protótipo ;

Tween . propHooks  =  {
	_default : {
		get : function (  tween  )  {
			var  result ;

			// Use uma propriedade no elemento diretamente quando não for um elemento DOM,
			// ou quando não existe nenhuma propriedade de estilo correspondente.
			if  (  tween . elem . nodeType  ! ==  1  ||
				interpolação . elem [  tween . prop  ]  ! =  null  &&  tween . elem . estilo [  tween . prop  ]  ==  null  )  {
				voltar  tween . elem [  tween . prop  ] ;
			}

			// Passar uma string vazia como um terceiro parâmetro para .css irá automaticamente
			// tenta um parseFloat e retorna para uma string se a análise falhar.
			// Valores simples como "10px" são analisados ​​em Float;
			// valores complexos como "rotate (1rad)" são retornados no estado em que se encontram.
			resultado  =  jQuery . css (  tween . elem ,  tween . prop ,  ""  ) ;

			// Strings vazias, nulas, indefinidas e "auto" são convertidas para 0.
			volte  ! resultado  ||  resultado  ===  "auto" ? 0 : resultado ;
		} ,
		set : function (  tween  )  {

			// Use step hook para back compat.
			// Use cssHook se estiver lá.
			// Use .style se disponível e use propriedades simples quando disponíveis.
			if  (  jQuery . fx . step [  tween . prop  ]  )  {
				jQuery . fx . etapa [  tween . prop  ] (  interpolação  ) ;
			}  else  if  (  tween . elem . nodeType  ===  1  &&
				(  tween . elem . style [  jQuery . cssProps [  tween . prop  ]  ]  ! =  null  ||
					jQuery . cssHooks [  tween . prop  ]  )  )  {
				jQuery . estilo (  tween . elem ,  tween . prop ,  tween . now  +  tween . unidade  ) ;
			}  else  {
				interpolação . elem [  tween . prop  ]  =  interpolação . agora ;
			}
		}
	}
} ;

// Suporte: IE <= 9 apenas
// Abordagem baseada em pânico para configurar coisas em nós desconectados
Tween . propHooks . scrollTop  =  Tween . propHooks . scrollLeft  =  {
	set : function (  tween  )  {
		if  (  tween . elem . nodeType  &&  tween . elem . parentNode  )  {
			interpolação . elem [  tween . prop  ]  =  interpolação . agora ;
		}
	}
} ;

jQuery . easing  =  {
	linear : função (  p  )  {
		return  p ;
	} ,
	swing : função (  p  )  {
		return  0.5  -  Math . cos (  p  *  Math . PI  )  /  2 ;
	} ,
	_padrão : "swing"
} ;

jQuery . fx  =  Tween . protótipo . init ;

// Back compat <1.8 ponto de extensão
jQuery . fx . etapa  =  { } ;




var
	fxNow ,  inProgress ,
	rfxtypes  =  / ^ (?: alternar | mostrar | ocultar ) $ / ,
	rrun  =  / queueHooks $ / ;

function  schedule ( )  {
	if  (  inProgress  )  {
		if  (  document . hidden  ===  false  &&  window . requestAnimationFrame  )  {
			janela . requestAnimationFrame (  programação  ) ;
		}  else  {
			janela . setTimeout (  agendamento ,  jQuery . fx . intervalo  ) ;
		}

		jQuery . fx . tick ( ) ;
	}
}

// Animações criadas de forma síncrona serão executadas de forma síncrona
function  createFxNow ( )  {
	janela . setTimeout (  function ( )  {
		fxNow  =  indefinido ;
	}  ) ;
	return  (  fxNow  =  jQuery . now ( )  ) ;
}

// Gere parâmetros para criar uma animação padrão
function  genFx (  type ,  includeWidth  )  {
	var  qual ,
		i  =  0 ,
		atrs  =  {  altura : tipo  } ;

	// Se incluirmos a largura, o valor do passo é 1 para fazer todos os valores cssExpand,
	// caso contrário, o valor da etapa é 2 para pular para a esquerda e para a direita
	includeWidth  =  includeWidth ? 1 : 0 ;
	para  (  ;  i  <  4 ;  i  + =  2  -  includeWidth  )  {
		qual  =  cssExpand [  i  ] ;
		attrs [  "margem"  +  que  ]  =  atributos [  "preenchimento"  +  que  ]  =  tipo ;
	}

	if  (  includeWidth  )  {
		atrs . opacidade  =  atrs . largura  =  tipo ;
	}

	return  attrs ;
}

function  createTween (  value ,  prop ,  animation  )  {
	var  tween ,
		coleção  =  (  Animação . tweeners [  prop  ]  ||  [ ]  ) . concat (  Animação . tweeners [  "*"  ]  ) ,
		índice  =  0 ,
		comprimento  =  coleção . comprimento ;
	para  (  ;  índice  <  comprimento ;  índice ++  )  {
		if  (  (  tween  =  coleção [  índice  ] . call (  animação ,  prop ,  valor  )  )  )  {

			// Terminamos com esta propriedade
			return  tween ;
		}
	}
}

function  defaultPrefilter (  elem ,  props ,  opts  )  {
	var  prop ,  valor ,  toggle ,  hooks ,  oldfire ,  propTween ,  restoreDisplay ,  display ,
		isBox  =  "largura"  em  adereços  ||  "altura"  em  adereços ,
		anim  =  isto ,
		orig  =  { } ,
		estilo  =  elem . estilo ,
		oculto  =  elem . nodeType  &&  isHiddenWithinTree (  elem  ) ,
		dataShow  =  dataPriv . get (  elem ,  "fxshow"  ) ;

	// Animações que pulam filas sequestram os ganchos fx
	if  (  ! opts . queue  )  {
		ganchos  =  jQuery . _queueHooks (  elem ,  "fx"  ) ;
		if  (  hooks . unqueued  ==  null  )  {
			ganchos . não enfileirado  =  0 ;
			oldfire  =  ganchos . vazio . fogo ;
			ganchos . vazio . fogo  =  função ( )  {
				if  (  ! hooks . unqueued  )  {
					oldfire ( ) ;
				}
			} ;
		}
		ganchos . não enfileirado ++ ;

		anim . sempre (  função ( )  {

			// Certifique-se de que o manipulador completo seja chamado antes de ser concluído
			anim . sempre (  função ( )  {
				ganchos . não enfileirado - ;
				if  (  ! jQuery . queue (  elem ,  "fx"  ) . length  )  {
					ganchos . vazio . fogo ( ) ;
				}
			}  ) ;
		}  ) ;
	}

	// Detecta mostrar / ocultar animações
	para  (  adereços  em  adereços  )  {
		valor  =  adereços [  prop  ] ;
		if  (  rfxtypes . test (  value  )  )  {
			excluir  adereços [  prop  ] ;
			toggle  =  toggle  ||  valor  ===  "toggle" ;
			if  (  value  ===  (  hidden ? "hide" : "show"  )  )  {

				// Finja estar escondido se for um "show" e
				// ainda há dados de uma exibição / ocultação interrompida
				if  (  value  ===  "show"  &&  dataShow  &&  dataShow [  prop  ]  ! ==  undefined  )  {
					oculto  =  verdadeiro ;

				// Ignorar todos os outros dados não operacionais para mostrar / ocultar
				}  else  {
					continue ;
				}
			}
			orig [  prop  ]  =  dataShow  &&  dataShow [  prop  ]  ||  jQuery . estilo (  elem ,  prop  ) ;
		}
	}

	// Resgate se este for um ambiente autônomo como .hide (). Hide ()
	propTween  =  ! jQuery . isEmptyObject (  adereços  ) ;
	if  (  ! propTween  &&  jQuery . isEmptyObject (  orig  )  )  {
		retorno ;
	}

	// Restrinja os estilos "overflow" e "display" durante as animações de caixa
	if  (  isBox  &&  elem . nodeType  ===  1  )  {

		// Suporte: IE <= 9 - 11, Edge 12 - 13
		// Registra todos os 3 atributos de estouro porque o IE não infere a abreviação
		// de overflowX e overflowY com valor idêntico
		opta . estouro  =  [  estilo . estouro ,  estilo . overflowX ,  style . overflowY  ] ;

		// Identifica um tipo de exibição, preferindo mostrar / ocultar dados antigos em vez da cascata CSS
		restoreDisplay  =  dataShow  &&  dataShow . display ;
		if  (  restoreDisplay  ==  null  )  {
			restoreDisplay  =  dataPriv . get (  elem ,  "exibir"  ) ;
		}
		display  =  jQuery . css (  elem ,  "exibir"  ) ;
		if  (  exibir  ===  "nenhum"  )  {
			if  (  restoreDisplay  )  {
				display  =  restoreDisplay ;
			}  else  {

				// Obter valor (es) não vazio (s) forçando temporariamente a visibilidade
				showHide (  [  elem  ] ,  verdadeiro  ) ;
				restoreDisplay  =  elem . estilo . display  ||  restoreDisplay ;
				display  =  jQuery . css (  elem ,  "exibir"  ) ;
				showHide (  [  elem  ]  ) ;
			}
		}

		// Anima elementos embutidos como bloco embutido
		if  (  display  ===  "inline"  ||  display  ===  "inline-block"  &&  restoreDisplay  ! =  null  )  {
			if  (  jQuery . css (  elem ,  "float"  )  ===  "nenhum"  )  {

				// Restaura o valor de exibição original no final das animações de exibição / ocultação puras
				if  (  ! propTween  )  {
					anim . done (  function ( )  {
						estilo . display  =  restoreDisplay ;
					}  ) ;
					if  (  restoreDisplay  ==  null  )  {
						display  =  style . display ;
						restoreDisplay  =  display  ===  "nenhum" ? "" : exibição ;
					}
				}
				estilo . display  =  "bloco embutido" ;
			}
		}
	}

	if  (  opta . estouro  )  {
		estilo . estouro  =  "escondido" ;
		anim . sempre (  função ( )  {
			estilo . estouro  =  opta . transbordamento [  0  ] ;
			estilo . overflowX  =  opta . transbordamento [  1  ] ;
			estilo . overflowY  =  opta . transbordamento [  2  ] ;
		}  ) ;
	}

	// Implementar mostrar / ocultar animações
	propTween  =  false ;
	para  (  prop  in  orig  )  {

		// Configuração geral de mostrar / ocultar para esta animação de elemento
		if  (  ! propTween  )  {
			if  (  dataShow  )  {
				if  (  "escondido"  em  dataShow  )  {
					oculto  =  dataShow . escondido ;
				}
			}  else  {
				dataShow  =  dataPriv . acesso (  elem ,  "fxshow" ,  {  display : restoreDisplay  }  ) ;
			}

			// Armazena oculto / visível para alternar para `.stop (). Toggle ()` "reverso"
			if  (  alternar  )  {
				dataShow . escondido  =  ! escondido ;
			}

			// Mostra os elementos antes de animá-los
			if  (  oculto  )  {
				showHide (  [  elem  ] ,  verdadeiro  ) ;
			}

			/ * eslint-disable no-loop-func * /

			anim . done (  function ( )  {

			/ * eslint-enable no-loop-func * /

				// A etapa final de uma animação "ocultar" é, na verdade, ocultar o elemento
				if  (  ! oculto  )  {
					showHide (  [  elem  ]  ) ;
				}
				dataPriv . remover (  elem ,  "fxshow"  ) ;
				para  (  prop  in  orig  )  {
					jQuery . estilo (  elem ,  prop ,  orig [  prop  ]  ) ;
				}
			}  ) ;
		}

		// Configuração por propriedade
		propTween  =  createTween (  escondido ? dataShow [  prop  ] : 0 ,  prop ,  anim  ) ;
		if  (  ! (  prop  in  dataShow  )  )  {
			dataShow [  prop  ]  =  propTween . começar ;
			if  (  oculto  )  {
				propTween . end  =  propTween . começar ;
				propTween . início  =  0 ;
			}
		}
	}
}

function  propFilter (  props ,  specialEasing  )  {
	 índice de var ,  nome ,  atenuação ,  valor ,  ganchos ;

	// camelCase, specialEasing e expand cssHook pass
	para  (  índice  em  adereços  )  {
		nome  =  jQuery . camelCase (  índice  ) ;
		atenuação  =  especialEasing [  nome  ] ;
		valor  =  adereços [  índice  ] ;
		if  (  Array . isArray (  valor  )  )  {
			atenuação  =  valor [  1  ] ;
			valor  =  props [  índice  ]  =  valor [  0  ] ;
		}

		if  (  índice  ! ==  nome  )  {
			adereços [  nome  ]  =  valor ;
			excluir  adereços [  índice  ] ;
		}

		ganchos  =  jQuery . cssHooks [  nome  ] ;
		if  (  ganchos  &&  "expandir"  nos  ganchos  )  {
			valor  =  ganchos . expandir (  valor  ) ;
			excluir  adereços [  nome  ] ;

			// Não exatamente $ .extend, isso não sobrescreverá as chaves existentes.
			// Reutilizando 'índice' porque temos o "nome" correto
			para  (  índice  em  valor  )  {
				if  (  ! (  índice  em  props  )  )  {
					adereços [  índice  ]  =  valor [  índice  ] ;
					especialEasing [  índice  ]  =  atenuação ;
				}
			}
		}  else  {
			especialEasing [  nome  ]  =  atenuação ;
		}
	}
}

função  Animação (  elem ,  propriedades ,  opções  )  {
	 resultado var ,
		parou ,
		índice  =  0 ,
		comprimento  =  animação . pré-filtros . comprimento ,
		adiado  =  jQuery . Adiado ( ) . sempre (  função ( )  {

			// Não combine o elemento no: seletor animado
			delete  tick . elem ;
		}  ) ,
		tick  =  function ( )  {
			if  (  parado  )  {
				return  false ;
			}
			var  currentTime  =  fxNow  ||  createFxNow ( ) ,
				restante  =  matemática . max (  0 ,  animação . startTime  +  animação . duração  -  currentTime  ) ,

				// Suporte: Android 2.3 apenas
				// Bug de travamento arcaico não nos permite usar `1 - (0,5 || 0)` (# 12497)
				temp  =  restante  /  animação . duração  ||  0 ,
				por cento  =  1  -  temp ,
				índice  =  0 ,
				comprimento  =  animação . pré-adolescentes . comprimento ;

			para  (  ;  índice  <  comprimento ;  índice ++  )  {
				animação . tweens [  índice  ] . corrida (  porcentagem  ) ;
			}

			diferido . notificar com (  elem ,  [  animação ,  porcentagem ,  restante  ]  ) ;

			// Se houver mais a fazer, ceda
			if  (  porcentagem  <  1  &&  comprimento  )  {
				retorno  restante ;
			}

			// Se esta foi uma animação vazia, sintetize uma notificação de progresso final
			if  (  ! comprimento  )  {
				diferido . notificar com (  elem ,  [  animação ,  1 ,  0  ]  ) ;
			}

			// Resolve a animação e relata sua conclusão
			diferido . resolveWith (  elem ,  [  animação  ]  ) ;
			return  false ;
		} ,
		animação  =  adiada . promessa (  {
			elem : elem ,
			adereços : jQuery . extend (  { } ,  propriedades  ) ,
			opta : jQuery . extend (  true ,  {
				specialEasing : { } ,
				atenuação : jQuery . atenuação . _padrão
			} ,  opções  ) ,
			originalProperties : propriedades ,
			originalOptions : opções ,
			startTime : fxNow  ||  createFxNow ( ) ,
			duração : opções . duração ,
			pré - adolescentes : [ ] ,
			createTween : function (  prop ,  end  )  {
				var  tween  =  jQuery . Tween (  elem ,  animação . Opts ,  prop ,  end ,
						animação . opta . EspecialEasing [  prop  ]  ||  animação . opta . atenuação  ) ;
				animação . pré-adolescentes . empurrar (  interpolação  ) ;
				return  tween ;
			} ,
			stop : function (  gotoEnd  )  {
				 índice  var =  0 ,

					// Se vamos até o fim, queremos executar todas as interpolações
					// caso contrário, pulamos esta parte
					comprimento  =  gotoEnd ? animação . pré-adolescentes . comprimento : 0 ;
				if  (  parado  )  {
					devolva  isso ;
				}
				parado  =  verdadeiro ;
				para  (  ;  índice  <  comprimento ;  índice ++  )  {
					animação . tweens [  índice  ] . executar (  1  ) ;
				}

				// Resolve quando reproduzimos o último quadro; caso contrário, rejeite
				if  (  gotoEnd  )  {
					diferido . notificar com (  elem ,  [  animação ,  1 ,  0  ]  ) ;
					diferido . resolveWith (  elem ,  [  animação ,  gotoEnd  ]  ) ;
				}  else  {
					diferido . rejeitarWith (  elem ,  [  animação ,  gotoEnd  ]  ) ;
				}
				devolva  isso ;
			}
		}  ) ,
		adereços  =  animação . adereços ;

	propFilter (  adereços ,  animação . opts . specialEasing  ) ;

	para  (  ;  índice  <  comprimento ;  índice ++  )  {
		resultado  =  animação . pré-filtros [  índice  ] . chamada (  animação ,  elem ,  adereços ,  animação . opts  ) ;
		if  (  resultado  )  {
			if  (  jQuery . isFunction (  result . stop  )  )  {
				jQuery . _queueHooks (  animação . elem ,  animação . opts . fila  ) . parar  =
					jQuery . proxy (  resultado . parar ,  resultado  ) ;
			}
			 resultado de retorno ;
		}
	}

	jQuery . mapa (  adereços ,  createTween ,  animação  ) ;

	if  (  jQuery . isFunction (  animação . opts . start  )  )  {
		animação . opta . começar . chamada (  elem ,  animação  ) ;
	}

	// Anexar callbacks de opções
	animação
		. progresso (  animação . opta . progresso  )
		. concluído (  animação . opta . concluído ,  animação . opta . completo  )
		. falha (  animação . opta . falha  )
		. sempre (  animação . opta . sempre  ) ;

	jQuery . fx . cronômetro (
		jQuery . extend (  tick ,  {
			elem : elem ,
			anim : animação ,
			fila : animação . opta . fila
		}  )
	) ;

	retornar  animação ;
}

jQuery . Animação  =  jQuery . extend (  Animação ,  {

	tweeners : {
		"*" : [  função (  prop ,  valor  )  {
			var  tween  =  isso . createTween (  prop ,  valor  ) ;
			ajustar CSS (  tween . elem ,  prop ,  rcssNum . exec (  valor  ) ,  interpolação  ) ;
			return  tween ;
		}  ]
	} ,

	tweener : function (  props ,  callback  )  {
		if  (  jQuery . isFunction (  props  )  )  {
			retorno de chamada  =  adereços ;
			adereços  =  [  "*"  ] ;
		}  else  {
			adereços  =  adereços . combinar (  rnothtmlwhite  ) ;
		}

		var  prop ,
			índice  =  0 ,
			comprimento  =  adereços . comprimento ;

		para  (  ;  índice  <  comprimento ;  índice ++  )  {
			prop  =  props [  índice  ] ;
			Animação . tweeners [  prop  ]  =  Animação . tweeners [  prop  ]  ||  [ ] ;
			Animação . interpoladores [  prop  ] . unshift (  retorno de chamada  ) ;
		}
	} ,

	pré - filtros : [  defaultPrefilter  ] ,

	prefilter : function (  callback ,  prepend  )  {
		if  (  prefixar  )  {
			Animação . pré-filtros . unshift (  retorno de chamada  ) ;
		}  else  {
			Animação . pré-filtros . push (  retorno de chamada  ) ;
		}
	}
}  ) ;

jQuery . velocidade  =  função (  velocidade ,  atenuação ,  fn  )  {
	var  opt  =  speed  &&  typeof  speed  ===  "objeto" ? jQuery . extender (  { } ,  velocidade  ) : {
		completo : fn  ||  ! fn  &&  easing  ||
			jQuery . isFunction (  velocidade  )  &&  velocidade ,
		duração : velocidade ,
		easing : fn  &&  easing  ||  facilitando  &&  ! jQuery . isFunction (  easing  )  &&  easing
	} ;

	// Vai para o estado final se fx estiver desligado
	if  (  jQuery . fx . off  )  {
		opt . duração  =  0 ;

	}  else  {
		if  (  typeof  opt . duration  ! ==  "number"  )  {
			se  (  opt . duração  em  jQuery . fx . velocidades  )  {
				opt . duração  =  jQuery . fx . velocidades [  opt . duração  ] ;

			}  else  {
				opt . duração  =  jQuery . fx . velocidades . _default ;
			}
		}
	}

	// Normalize opt.queue - true / undefined / null -> "fx"
	if  (  opt . queue  ==  null  ||  opt . queue  ===  true  )  {
		opt . fila  =  "fx" ;
	}

	// Queuing
	opt . old  =  opt . completo ;

	opt . complete  =  function ( )  {
		if  (  jQuery . isFunction (  opt . old  )  )  {
			opt . velho . ligar (  isso  ) ;
		}

		if  (  fila opt . ) {
			jQuery . dequeue (  this ,  opt . queue  ) ;
		}
	} ;

	return  opt ;
} ;

jQuery . fn . extend (  {
	fadeTo : function (  speed ,  to ,  easing ,  callback  )  {

		// Mostra todos os elementos ocultos após definir a opacidade para 0
		devolva  isso . filtro (  isHiddenWithinTree  ) . css (  "opacidade" ,  0  ) . show ( )

			// Anime para o valor especificado
			. fim ( ) . animate (  {  opacity : to  } ,  speed ,  easing ,  callback  ) ;
	} ,
	animate : function (  prop ,  speed ,  easing ,  callback  )  {
		var  empty  =  jQuery . isEmptyObject (  prop  ) ,
			optall  =  jQuery . velocidade (  velocidade ,  atenuação ,  retorno de chamada  ) ,
			doAnimation  =  function ( )  {

				// Operar em uma cópia do prop para que o easing por propriedade não seja perdido
				var  anim  =  Animação (  this ,  jQuery . extend (  { } ,  prop  ) ,  optall  ) ;

				// Esvazia as animações ou o acabamento é resolvido imediatamente
				if  (  empty  ||  dataPriv . get (  this ,  "terminar"  )  )  {
					anim . parar (  verdadeiro  ) ;
				}
			} ;
			doAnimation . terminar  =  doAnimation ;

		retorna  vazio  ||  optall . queue  ===  false ?
			isso . cada (  doAnimation  ) :
			isso . fila (  optall . queue ,  doAnimation  ) ;
	} ,
	stop : function (  type ,  clearQueue ,  gotoEnd  )  {
		var  stopQueue  =  function (  hooks  )  {
			var  stop  =  hooks . pare ;
			exclua  ganchos . pare ;
			parar (  gotoEnd  ) ;
		} ;

		if  (  typeof  type  ! ==  "string"  )  {
			gotoEnd  =  clearQueue ;
			clearQueue  =  type ;
			tipo  =  indefinido ;
		}
		if  (  clearQueue  &&  type  ! ==  false  )  {
			isso . fila (  digite  ||  "fx" ,  [ ]  ) ;
		}

		devolva  isso . cada (  função ( )  {
			var  dequeue  =  true ,
				índice  =  tipo  ! =  nulo  &&  tipo  +  "queueHooks" ,
				temporizadores  =  jQuery . temporizadores ,
				dados  =  dataPriv . obter (  isso  ) ;

			if  (  índice  )  {
				if  (  dados [  índice  ]  &&  dados [  índice  ] . parar  )  {
					stopQueue (  dados [  índice  ]  ) ;
				}
			}  else  {
				para  (  índice  em  dados  )  {
					if  (  dados [  índice  ]  &&  dados [  índice  ] . parar  &&  rrun . teste (  índice  )  )  {
						stopQueue (  dados [  índice  ]  ) ;
					}
				}
			}

			para  (  índice  =  temporizadores . comprimento ;  índice - ;  )  {
				if  (  temporizadores [  índice  ] . elem  ===  this  &&
					(  tipo  ==  nulo  ||  temporizadores [  índice  ] . fila  ===  tipo  )  )  {

					temporizadores [  índice  ] . anim . parar (  gotoEnd  ) ;
					desenfileirar  =  falso ;
					temporizadores . emenda (  índice ,  1  ) ;
				}
			}

			// Inicia o próximo na fila se a última etapa não foi forçada.
			// Timers atualmente chamam seus retornos de chamada completos, que
			// irá retirar da fila, mas apenas se eles fossem gotoEnd.
			if  (  desenfileirar  ||  ! gotoEnd  )  {
				jQuery . desenfileirar (  este ,  digite  ) ;
			}
		}  ) ;
	} ,
	acabamento : função (  tipo  )  {
		if  (  type  ! ==  false  )  {
			tipo  =  tipo  ||  "fx" ;
		}
		devolva  isso . cada (  função ( )  {
			 índice var ,
				dados  =  dataPriv . pegue (  isso  ) ,
				fila  =  dados [  tipo  +  "fila"  ] ,
				ganchos  =  dados [  tipo  +  "queueHooks"  ] ,
				temporizadores  =  jQuery . temporizadores ,
				comprimento  =  fila ? fila . comprimento : 0 ;

			// Habilitar sinalizador de finalização em dados privados
			dados . terminar  =  verdadeiro ;

			// Esvazie a fila primeiro
			jQuery . fila (  isto ,  tipo ,  [ ]  ) ;

			if  (  ganchos  &&  ganchos . parar  )  {
				ganchos . pare . chamar (  isso ,  verdadeiro  ) ;
			}

			// Procure quaisquer animações ativas e termine-as
			para  (  índice  =  temporizadores . comprimento ;  índice - ;  )  {
				if  (  timers [  index  ] . elem  ===  this  &&  timers [  index  ] . queue  ===  type  )  {
					temporizadores [  índice  ] . anim . parar (  verdadeiro  ) ;
					temporizadores . emenda (  índice ,  1  ) ;
				}
			}

			// Procure quaisquer animações na fila antiga e termine-as
			para  (  índice  =  0 ;  índice  <  comprimento ;  índice ++  )  {
				if  (  fila [  índice  ]  &&  fila [  índice  ] . terminar  )  {
					fila [  índice  ] . terminar . ligar (  isso  ) ;
				}
			}

			// Desligue a bandeira de acabamento
			excluir  dados . terminar ;
		}  ) ;
	}
}  ) ;

jQuery . cada (  [  "alternar" ,  "mostrar" ,  "ocultar"  ] ,  função (  i ,  nome  )  {
	var  cssFn  =  jQuery . fn [  nome  ] ;
	jQuery . fn [  nome  ]  =  função (  velocidade ,  atenuação ,  retorno de chamada  )  {
		 velocidade de  retorno ==  null  ||  typeof  speed  ===  "boolean" ?
			cssFn . aplicar (  isto ,  argumentos  ) :
			isso . animate (  genFx (  nome ,  verdadeiro  ) ,  velocidade ,  atenuação ,  retorno de chamada  ) ;
	} ;
}  ) ;

// Gerar atalhos para animações personalizadas
jQuery . cada (  {
	slideDown : genFx (  "show"  ) ,
	slideUp : genFx (  "ocultar"  ) ,
	slideToggle : GenFX (  "toggle"  ) ,
	fadeIn : {  opacidade : "show"  } ,
	fadeOut : {  opacity : "hide"  } ,
	fadeToggle : {  opacidade : "toggle"  }
} ,  função (  nome ,  adereços  )  {
	jQuery . fn [  nome  ]  =  função (  velocidade ,  atenuação ,  retorno de chamada  )  {
		devolva  isso . animar (  adereços ,  velocidade ,  atenuação ,  retorno de chamada  ) ;
	} ;
}  ) ;

jQuery . temporizadores  =  [ ] ;
jQuery . fx . tick  =  function ( )  {
	var  timer ,
		i  =  0 ,
		temporizadores  =  jQuery . temporizadores ;

	fxNow  =  jQuery . agora ( ) ;

	para  (  ;  i  <  temporizadores . comprimento ;  i ++  )  {
		temporizador  =  temporizadores [  i  ] ;

		// Execute o cronômetro e remova-o com segurança quando terminar (permitindo a remoção externa)
		if  (  ! timer ( )  &&  timers [  i  ]  ===  timer  )  {
			temporizadores . emenda (  i - ,  1  ) ;
		}
	}

	if  (  ! timers . length  )  {
		jQuery . fx . parar ( ) ;
	}
	fxNow  =  indefinido ;
} ;

jQuery . fx . temporizador  =  função (  temporizador  )  {
	jQuery . temporizadores . empurre (  cronômetro  ) ;
	jQuery . fx . start ( ) ;
} ;

jQuery . fx . intervalo  =  13 ;
jQuery . fx . start  =  function ( )  {
	if  (  inProgress  )  {
		retorno ;
	}

	inProgress  =  true ;
	cronograma ( ) ;
} ;

jQuery . fx . stop  =  function ( )  {
	inProgress  =  null ;
} ;

jQuery . fx . velocidades  =  {
	lento : 600 ,
	rápido : 200 ,

	// Velocidade padrão
	_padrão : 400
} ;


// Baseado no plugin de Clint Helfers, com permissão.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery . fn . atraso  =  função (  tempo ,  tipo  )  {
	time  =  jQuery . fx ? jQuery . fx . velocidades [  tempo  ]  ||  hora : hora ;
	tipo  =  tipo  ||  "fx" ;

	devolva  isso . fila (  tipo ,  função (  próximo ,  ganchos  )  {
		var  timeout  =  window . setTimeout (  próximo ,  hora  ) ;
		ganchos . stop  =  function ( )  {
			janela . clearTimeout (  tempo limite  ) ;
		} ;
	}  ) ;
} ;


(  função ( )  {
	var  input  =  document . createElement (  "input"  ) ,
		select  =  document . createElement (  "select"  ) ,
		opt  =  select . appendChild (  document . createElement (  "option"  )  ) ;

	entrada . type  =  "caixa de seleção" ;

	// Suporte: Android <= 4.3 apenas
	// O valor padrão para uma caixa de seleção deve ser "on"
	suporte . checkOn  =  entrada . valor  ! ==  "" ;

	// Suporte: IE <= 11 apenas
	// Deve acessar o selectedIndex para fazer as opções padrão selecionar
	suporte . optSelected  =  opt . selecionado ;

	// Suporte: IE <= 11 apenas
	// Uma entrada perde seu valor após se tornar um rádio
	entrada  =  documento . createElement (  "input"  ) ;
	entrada . valor  =  "t" ;
	entrada . tipo  =  "rádio" ;
	suporte . radioValue  =  input . valor  ===  "t" ;
}  ) ( ) ;


var  boolHook ,
	attrHandle  =  jQuery . expr . attrHandle ;

jQuery . fn . extend (  {
	attr : function (  nome ,  valor  )  {
		 acesso de retorno (  this ,  jQuery . attr ,  nome ,  valor ,  argumentos . comprimento  >  1  ) ;
	} ,

	removeAttr : function (  name  )  {
		devolva  isso . cada (  função ( )  {
			jQuery . removeAttr (  este ,  nome  ) ;
		}  ) ;
	}
}  ) ;

jQuery . extend (  {
	attr : function (  elem ,  nome ,  valor  )  {
		var  ret ,  ganchos ,
			nType  =  elem . nodeType ;

		// Não obtenha / defina atributos em nós de texto, comentário e atributo
		if  (  nType  ===  3  ||  nType  ===  8  ||  nType  ===  2  )  {
			retorno ;
		}

		// Fallback para prop quando os atributos não são suportados
		if  (  typeof  elem . getAttribute  ===  "undefined"  )  {
			return  jQuery . prop (  elem ,  nome ,  valor  ) ;
		}

		// Ganchos de atributos são determinados pela versão em minúsculas
		// Pegue o gancho necessário se um estiver definido
		if  (  nType  ! ==  1  ||  ! jQuery . isXMLDoc (  elem  )  )  {
			ganchos  =  jQuery . attrHooks [  nome . toLowerCase ( )  ]  ||
				(  jQuery . expr . match . bool . test (  name  ) ? boolHook : undefined  ) ;
		}

		if  (  value  ! ==  undefined  )  {
			if  (  value  ===  null  )  {
				jQuery . removeAttr (  elem ,  nome  ) ;
				retorno ;
			}

			if  (  hooks  &&  "set"  in  hooks  &&
				(  ret  =  ganchos . set (  elem ,  valor ,  nome  )  )  ! ==  undefined  )  {
				return  ret ;
			}

			elem . setAttribute (  nome ,  valor  +  ""  ) ;
			 valor de retorno ;
		}

		if  (  hooks  &&  "get"  in  hooks  &&  (  ret  =  hooks . get (  elem ,  nome  )  )  ! ==  null  )  {
			return  ret ;
		}

		ret  =  jQuery . encontrar . attr (  elem ,  nome  ) ;

		// Atributos inexistentes retornam nulo, normalizamos para indefinido
		return  ret  ==  null ? indefinido : ret ;
	} ,

	attrHooks : {
		tipo : {
			conjunto : função (  elem ,  valor  )  {
				if  (  ! support . radioValue  &&  value  ===  "radio"  &&
					nodeName (  elem ,  "input"  )  )  {
					var  val  =  elem . valor ;
					elem . setAttribute (  "tipo" ,  valor  ) ;
					if  (  val  )  {
						elem . valor  =  val ;
					}
					 valor de retorno ;
				}
			}
		}
	} ,

	removeAttr : function (  elem ,  value  )  {
		 nome var ,
			i  =  0 ,

			// Nomes de atributos podem conter caracteres de espaço em branco não HTML
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames  =  valor  &&  valor . combinar (  rnothtmlwhite  ) ;

		if  (  attrNames  &&  elem . nodeType  ===  1  )  {
			while  (  (  name  =  attrNames [  i ++  ]  )  )  {
				elem . removeAttribute (  nome  ) ;
			}
		}
	}
}  ) ;

// Ganchos para atributos booleanos
boolHook  =  {
	conjunto : função (  elem ,  valor ,  nome  )  {
		if  (  value  ===  false  )  {

			// Remova os atributos booleanos quando definido como falso
			jQuery . removeAttr (  elem ,  nome  ) ;
		}  else  {
			elem . setAttribute (  nome ,  nome  ) ;
		}
		 nome de retorno ;
	}
} ;

jQuery . cada (  jQuery . expr . match . bool . source . match (  / \ w + / g  ) ,  função (  i ,  nome  )  {
	var  getter  =  attrHandle [  nome  ]  ||  jQuery . encontrar . attr ;

	attrHandle [  nome  ]  =  função (  elem ,  nome ,  isXML  )  {
		var  ret ,  lidar ,
			lowercaseName  =  name . toLowerCase ( ) ;

		if  (  ! isXML  )  {

			// Evite um loop infinito removendo temporariamente esta função do getter
			handle  =  attrHandle [  lowercaseName  ] ;
			attrHandle [  lowercaseName  ]  =  ret ;
			ret  =  getter (  elem ,  nome ,  isXML  )  ! =  null ?
				minúsculasNome :
				null ;
			attrHandle [  lowercaseName  ]  =  identificador ;
		}
		return  ret ;
	} ;
}  ) ;




var  rfocusable  =  / ^ (?: input | select | textarea | botão ) $ / i ,
	rclickable  =  / ^ (?: a | área ) $ / i ;

jQuery . fn . extend (  {
	prop : função (  nome ,  valor  )  {
		 acesso de retorno (  this ,  jQuery . prop ,  nome ,  valor ,  argumentos . comprimento  >  1  ) ;
	} ,

	removeProp : function (  name  )  {
		devolva  isso . cada (  função ( )  {
			exclua  este [  jQuery . propFix [  nome  ]  ||  nome  ] ;
		}  ) ;
	}
}  ) ;

jQuery . extend (  {
	prop : função (  elem ,  nome ,  valor  )  {
		var  ret ,  ganchos ,
			nType  =  elem . nodeType ;

		// Não obtenha / defina propriedades em nós de texto, comentário e atributo
		if  (  nType  ===  3  ||  nType  ===  8  ||  nType  ===  2  )  {
			retorno ;
		}

		if  (  nType  ! ==  1  ||  ! jQuery . isXMLDoc (  elem  )  )  {

			// Corrigir nome e anexar ganchos
			nome  =  jQuery . propFix [  nome  ]  ||  nome ;
			ganchos  =  jQuery . propHooks [  nome  ] ;
		}

		if  (  value  ! ==  undefined  )  {
			if  (  hooks  &&  "set"  in  hooks  &&
				(  ret  =  ganchos . set (  elem ,  valor ,  nome  )  )  ! ==  undefined  )  {
				return  ret ;
			}

			return  (  elem [  nome  ]  =  valor  ) ;
		}

		if  (  hooks  &&  "get"  in  hooks  &&  (  ret  =  hooks . get (  elem ,  nome  )  )  ! ==  null  )  {
			return  ret ;
		}

		return  elem [  nome  ] ;
	} ,

	propHooks : {
		tabIndex : {
			get : function (  elem  )  {

				// Suporte: IE <= 9 - 11 apenas
				// elem.tabIndex nem sempre retorna o
				// valor correto quando não foi definido explicitamente
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use a recuperação de atributo adequada (# 12072)
				var  tabindex  =  jQuery . encontrar . attr (  elem ,  "tabindex"  ) ;

				if  (  tabindex  )  {
					return  parseInt (  tabindex ,  10  ) ;
				}

				se  (
					rfocusable . teste (  elem . nodeName  )  ||
					rclickable . teste (  elem . nodeName  )  &&
					elem . href
				)  {
					return  0 ;
				}

				retorno  - 1 ;
			}
		}
	} ,

	propFix : {
		"para" : "htmlFor" ,
		"class" : "className"
	}
}  ) ;

// Suporte: IE <= 11 apenas
// Acessando a propriedade selectedIndex
// força o navegador a respeitar a configuração selecionada
// na opção
// O getter garante que uma opção padrão seja selecionada
// quando em um optgroup
// regra eslint "sem expressões não utilizadas" está desabilitada para este código
// uma vez que considera tais acessos noop
if  (  ! support . optSelected  )  {
	jQuery . propHooks . selecionado  =  {
		get : function (  elem  )  {

			/ * eslint sem expressões não utilizadas: "off" * /

			var  parent  =  elem . parentNode ;
			if  (  parent  &&  parent . parentNode  )  {
				pai . parentNode . selectedIndex ;
			}
			return  null ;
		} ,
		set : function (  elem  )  {

			/ * eslint sem expressões não utilizadas: "off" * /

			var  parent  =  elem . parentNode ;
			if  (  pai  )  {
				pai . selectedIndex ;

				if  (  parent . parentNode  )  {
					pai . parentNode . selectedIndex ;
				}
			}
		}
	} ;
}

jQuery . cada (  [
	"tabIndex" ,
	"somente leitura" ,
	"maxLength" ,
	"cellSpacing" ,
	"cellPadding" ,
	"rowSpan" ,
	"colSpan" ,
	"useMap" ,
	"frameBorder" ,
	"contentEditable"
] ,  função ( )  {
	jQuery . propFix [  isso . toLowerCase ( )  ]  =  isso ;
}  ) ;




	// Retira e reduz os espaços em branco de acordo com as especificações HTML
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function  stripAndCollapse (  value  )  {
		var  tokens  =  valor . combinar (  rnothtmlwhite  )  ||  [ ] ;
		 tokens de retorno . juntar (  ""  ) ;
	}


function  getClass (  elem  )  {
	return  elem . getAttribute  &&  elem . getAttribute (  "class"  )  ||  "" ;
}

jQuery . fn . extend (  {
	addClass : function (  value  )  {
		var  classes ,  elem ,  cur ,  curValue ,  clazz ,  j ,  finalValue ,
			i  =  0 ;

		if  (  jQuery . isFunction (  value  )  )  {
			devolva  isso . cada (  função (  j  )  {
				jQuery (  isso  ) . addClass (  value . call (  this ,  j ,  getClass (  this  )  )  ) ;
			}  ) ;
		}

		if  (  typeof  value  ===  "string"  &&  value  )  {
			classes  =  valor . combinar (  rnothtmlwhite  )  ||  [ ] ;

			while  (  (  elem  =  this [  i ++  ]  )  )  {
				curValue  =  getClass (  elem  ) ;
				cur  =  elem . nodeType  ===  1  &&  (  ""  +  stripAndCollapse (  curValue  )  +  ""  ) ;

				if  (  cur  )  {
					j  =  0 ;
					while  (  (  clazz  =  classes [  j ++  ]  )  )  {
						if  (  cur . indexOf (  ""  +  clazz  +  ""  )  <  0  )  {
							cur  + =  clazz  +  "" ;
						}
					}

					// Apenas atribua se for diferente para evitar renderização desnecessária.
					finalValue  =  stripAndCollapse (  cur  ) ;
					if  (  curValue  ! ==  finalValue  )  {
						elem . setAttribute (  "classe" ,  finalValue  ) ;
					}
				}
			}
		}

		devolva  isso ;
	} ,

	removeClass : function (  value  )  {
		var  classes ,  elem ,  cur ,  curValue ,  clazz ,  j ,  finalValue ,
			i  =  0 ;

		if  (  jQuery . isFunction (  value  )  )  {
			devolva  isso . cada (  função (  j  )  {
				jQuery (  isso  ) . removeClass (  value . call (  this ,  j ,  getClass (  this  )  )  ) ;
			}  ) ;
		}

		if  (  ! argumentos . comprimento  )  {
			devolva  isso . attr (  "classe" ,  ""  ) ;
		}

		if  (  typeof  value  ===  "string"  &&  value  )  {
			classes  =  valor . combinar (  rnothtmlwhite  )  ||  [ ] ;

			while  (  (  elem  =  this [  i ++  ]  )  )  {
				curValue  =  getClass (  elem  ) ;

				// Esta expressão está aqui para melhor compressibilidade (veja addClass)
				cur  =  elem . nodeType  ===  1  &&  (  ""  +  stripAndCollapse (  curValue  )  +  ""  ) ;

				if  (  cur  )  {
					j  =  0 ;
					while  (  (  clazz  =  classes [  j ++  ]  )  )  {

						// Remover * todas * as instâncias
						while  (  cur . indexOf (  ""  +  clazz  +  ""  )  >  - 1  )  {
							cur  =  cur . substituir (  ""  +  clazz  +  "" ,  ""  ) ;
						}
					}

					// Apenas atribua se for diferente para evitar renderização desnecessária.
					finalValue  =  stripAndCollapse (  cur  ) ;
					if  (  curValue  ! ==  finalValue  )  {
						elem . setAttribute (  "classe" ,  finalValue  ) ;
					}
				}
			}
		}

		devolva  isso ;
	} ,

	toggleClass : function (  value ,  stateVal  )  {
		var  type  =  typeof  value ;

		if  (  typeof  stateVal  ===  "boolean"  &&  type  ===  "string"  )  {
			retornar  stateVal ? isso . addClass (  value  ) : isso . removeClass (  valor  ) ;
		}

		if  (  jQuery . isFunction (  value  )  )  {
			devolva  isso . cada (  função (  i  )  {
				jQuery (  isso  ) . toggleClass (
					valor . chamar (  this ,  i ,  getClass (  this  ) ,  stateVal  ) ,
					stateVal
				) ;
			}  ) ;
		}

		devolva  isso . cada (  função ( )  {
			var  className ,  i ,  self ,  classNames ;

			if  (  digite  ===  "string"  )  {

				// Alternar nomes de classes individuais
				i  =  0 ;
				self  =  jQuery (  this  ) ;
				classNames  =  valor . combinar (  rnothtmlwhite  )  ||  [ ] ;

				while  (  (  className  =  classNames [  i ++  ]  )  )  {

					// Verifique cada className fornecido, lista separada por espaço
					if  (  self . hasClass (  className  )  )  {
						eu . removeClass (  className  ) ;
					}  else  {
						eu . addClass (  className  ) ;
					}
				}

			// Alternar o nome da classe inteira
			}  else  if  (  value  ===  undefined  ||  type  ===  "boolean"  )  {
				className  =  getClass (  this  ) ;
				if  (  className  )  {

					// Armazena className se definido
					dataPriv . set (  this ,  "__className__" ,  className  ) ;
				}

				// Se o elemento tiver um nome de classe ou se passarmos por `false`,
				// em seguida, remova todo o nome da classe (se houver, o acima o salvou).
				// Caso contrário, traga de volta o que foi salvo anteriormente (se houver),
				// voltando para a string vazia se nada foi armazenado.
				if  (  this . setAttribute  )  {
					isso . setAttribute (  "class" ,
						className  ||  valor  ===  falso ?
						"" :
						dataPriv . get (  this ,  "__className__"  )  ||  ""
					) ;
				}
			}
		}  ) ;
	} ,

	hasClass : function (  selector  )  {
		var  className ,  elem ,
			i  =  0 ;

		className  =  ""  +  seletor  +  "" ;
		while  (  (  elem  =  this [  i ++  ]  )  )  {
			if  (  elem . nodeType  ===  1  &&
				(  ""  +  stripAndCollapse (  getClass (  elem  )  )  +  ""  ) . indexOf (  className  )  >  - 1  )  {
					return  true ;
			}
		}

		return  false ;
	}
}  ) ;




var  rreturn  =  / \ r / g ;

jQuery . fn . extend (  {
	val : função (  valor  )  {
		var  hooks ,  ret ,  isFunction ,
			elem  =  este [  0  ] ;

		if  (  ! argumentos . comprimento  )  {
			if  (  elem  )  {
				ganchos  =  jQuery . valHooks [  elem . tipo  ]  ||
					jQuery . valHooks [  elem . nodeName . toLowerCase ( )  ] ;

				if  (  conecta  &&
					"get"  em  ganchos  &&
					(  ret  =  ganchos . get (  elem ,  "valor"  )  )  ! ==  indefinido
				)  {
					return  ret ;
				}

				ret  =  elem . valor ;

				// Lidar com os casos de string mais comuns
				if  (  typeof  ret  ===  "string"  )  {
					return  ret . substituir (  retornar ,  ""  ) ;
				}

				// Lidar com casos em que o valor é nulo / undef ou número
				return  ret  ==  null ? "" : ret ;
			}

			retorno ;
		}

		isFunction  =  jQuery . isFunction (  value  ) ;

		devolva  isso . cada (  função (  i  )  {
			var  val ;

			if  (  this . nodeType  ! ==  1  )  {
				retorno ;
			}

			if  (  isFunction  )  {
				val  =  valor . chamar (  this ,  i ,  jQuery (  this  ) . val ( )  ) ;
			}  else  {
				val  =  valor ;
			}

			// Tratar nulo / indefinido como ""; converter números em string
			if  (  val  ==  null  )  {
				val  =  "" ;

			}  else  if  (  typeof  val  ===  "número"  )  {
				val  + =  "" ;

			}  else  if  (  Array . isArray (  val  )  )  {
				val  =  jQuery . map (  val ,  função (  valor  )  {
					 valor de  retorno ==  nulo ? "" : valor  +  "" ;
				}  ) ;
			}

			ganchos  =  jQuery . valHooks [  isso . tipo  ]  ||  jQuery . valHooks [  isso . nodeName . toLowerCase ( )  ] ;

			// Se set retornar indefinido, volte para a configuração normal
			if  (  ! hooks  ||  ! (  "set"  nos  ganchos  )  ||  hooks . set (  this ,  val ,  "value"  )  ===  undefined  )  {
				isso . valor  =  val ;
			}
		}  ) ;
	}
}  ) ;

jQuery . extend (  {
	valHooks : {
		opção : {
			get : function (  elem  )  {

				var  val  =  jQuery . encontrar . attr (  elem ,  "valor"  ) ;
				return  val  ! =  null ?
					val :

					// Suporte: IE <= 10 - 11 apenas
					// option.text lança exceções (# 14686, # 14858)
					// Retira e reduz os espaços em branco
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse (  jQuery . text (  elem  )  ) ;
			}
		} ,
		selecione : {
			get : function (  elem  )  {
				 valor var ,  opção ,  i ,
					options  =  elem . opções ,
					índice  =  elem . selectedIndex ,
					um  =  elem . digite  ===  "selecione um" ,
					valores  =  um ? null : [ ] ,
					max  =  um ? índice  +  1 : opções . comprimento ;

				if  (  índice  <  0  )  {
					i  =  max ;

				}  else  {
					i  =  um ? índice : 0 ;
				}

				// Percorre todas as opções selecionadas
				para  (  ;  i  <  max ;  i ++  )  {
					opção  =  opções [  i  ] ;

					// Suporte: IE <= 9 apenas
					// IE8-9 não atualiza selecionado após a redefinição do formulário (# 2551)
					if  (  (  opção . selecionado  ||  i  ===  índice  )  &&

							// Não retorna opções que estão desabilitadas ou em um optgroup desabilitado
							! opção . desativado  &&
							(  ! opção . parentNode . disabled  ||
								! nodeName (  option . parentNode ,  "optgroup"  )  )  )  {

						// Obtenha o valor específico para a opção
						valor  =  jQuery (  opção  ) . val ( ) ;

						// Não precisamos de um array para um select
						if  (  um  )  {
							 valor de retorno ;
						}

						// Multi-Selects retornam um array
						valores . push (  valor  ) ;
					}
				}

				 valores de retorno ;
			} ,

			conjunto : função (  elem ,  valor  )  {
				var  optionSet ,  option ,
					options  =  elem . opções ,
					valores  =  jQuery . makeArray (  valor  ) ,
					i  =  opções . comprimento ;

				enquanto  (  i -  )  {
					opção  =  opções [  i  ] ;

					/ * eslint-disable no-cond-assign * /

					if  (  opção . selecionado  =
						jQuery . inArray (  jQuery . valHooks . opção . get (  opção  ) ,  valores  )  >  - 1
					)  {
						optionSet  =  true ;
					}

					/ * eslint-enable no-cond-assign * /
				}

				// Força os navegadores a se comportarem de forma consistente quando um valor não correspondente é definido
				if  (  ! optionSet  )  {
					elem . selectedIndex  =  - 1 ;
				}
				 valores de retorno ;
			}
		}
	}
}  ) ;

// Rádios e caixas de seleção getter / setter
jQuery . cada (  [  "rádio" ,  "caixa de seleção"  ] ,  função ( )  {
	jQuery . valHooks [  this  ]  =  {
		conjunto : função (  elem ,  valor  )  {
			if  (  Array . isArray (  valor  )  )  {
				return  (  elem . verificado  =  jQuery . inArray (  jQuery (  elem  ) . val ( ) ,  valor  )  >  - 1  ) ;
			}
		}
	} ;
	if  (  ! support . checkOn  )  {
		jQuery . valHooks [  isso  ] . get  =  function (  elem  )  {
			return  elem . getAttribute (  "value"  )  ===  null ? "on" : elem . valor ;
		} ;
	}
}  ) ;




// Retorna jQuery para inclusão apenas de atributos


var  rfocusMorph  =  / ^ (?: focusinfocus | focusoutblur ) $ / ;

jQuery . extend (  evento jQuery . , {

	gatilho : função (  evento ,  dados ,  elem ,  onlyHandlers  )  {

		var  i ,  cur ,  tmp ,  bubbleType ,  ontype ,  handle ,  special ,
			eventPath  =  [  elem  ||  documento  ] ,
			type  =  hasOwn . chamar (  evento ,  "tipo"  ) ? evento . tipo : evento ,
			namespaces  =  hasOwn . chamar (  evento ,  "namespace"  ) ? evento . namespace . dividir (  "."  ) : [ ] ;

		cur  =  tmp  =  elem  =  elem  ||  documento ;

		// Não faça eventos em nós de texto e comentário
		if  (  elem . nodeType  ===  3  ||  elem . nodeType  ===  8  )  {
			retorno ;
		}

		// foco / desfoque se transforma em focusin / out; certifique-se de que não os estamos despedindo agora
		if  (  rfocusMorph . test (  type  +  jQuery . event . triggered  )  )  {
			retorno ;
		}

		if  (  type . indexOf (  "."  )  >  - 1  )  {

			// Gatilho com namespace; crie um regexp para corresponder ao tipo de evento em handle ()
			namespaces  =  tipo . dividir (  "."  ) ;
			type  =  namespaces . shift ( ) ;
			namespaces . sort ( ) ;
		}
		ontype  =  type . indexOf (  ":"  )  <  0  &&  "on"  +  type ;

		// O chamador pode passar um objeto jQuery.Event, Object ou apenas uma string de tipo de evento
		evento  =  evento [  jQuery . expando  ] ?
			evento :
			novo  jQuery . Evento (  tipo ,  typeof  evento  ===  "objeto"  &&  evento  ) ;

		// Trigger bitmask: & 1 para manipuladores nativos; & 2 para jQuery (sempre verdadeiro)
		evento . isTrigger  =  onlyHandlers ? 2 : 3 ;
		evento . namespace  =  namespaces . junte-se (  "."  ) ;
		evento . rnamespace  =  evento . namespace ?
			new  RegExp (  "(^ | \\.)"  +  namespaces . join (  "\\. (?:. * \\. |)"  )  +  "(\\. | $)"  ) :
			null ;

		// Limpe o evento caso esteja sendo reutilizado
		evento . resultado  =  indefinido ;
		if  (  ! event . target  )  {
			evento . alvo  =  elem ;
		}

		// Clone todos os dados de entrada e acrescente o evento, criando a lista de argumentos do manipulador
		data  =  data  ==  null ?
			[  evento  ] :
			jQuery . makeArray (  dados ,  [  evento  ]  ) ;

		// Permitir que eventos especiais sejam desenhados fora das linhas
		especial  =  jQuery . evento . especial [  tipo  ]  ||  { } ;
		if  (  ! onlyHandlers  &&  special . trigger  &&  special . trigger . apply (  elem ,  data  )  ===  false  )  {
			retorno ;
		}

		// Determine o caminho de propagação do evento com antecedência, de acordo com as especificações de eventos W3C (# 9951)
		// Borbulha para o documento e depois para a janela; observe um proprietário global do documento var (# 9724)
		if  (  ! onlyHandlers  &&  ! special . noBubble  &&  ! jQuery . isWindow (  elem  )  )  {

			bubbleType  =  especial . delegateType  ||  tipo ;
			if  (  ! rfocusMorph . test (  bubbleType  +  type  )  )  {
				cur  =  cur . parentNode ;
			}
			for  (  ;  cur ;  cur  =  cur . parentNode  )  {
				eventPath . empurrar (  cur  ) ;
				tmp  =  cur ;
			}

			// Adicione a janela apenas se tivermos que documentar (por exemplo, não objeto simples ou DOM separado)
			if  (  tmp  ===  (  elem . ownerDocument  ||  document  )  )  {
				eventPath . push (  tmp . defaultView  ||  tmp . parentWindow  ||  janela  ) ;
			}
		}

		// Dispara manipuladores no caminho do evento
		i  =  0 ;
		while  (  (  cur  =  eventPath [  i ++  ]  )  &&  ! event . isPropagationStopped ( )  )  {

			evento . tipo  =  i  >  1 ?
				bubbleType :
				especial . bindType  ||  tipo ;

			// jQuery handler
			handle  =  (  dataPriv . get (  cur ,  "events"  )  ||  { }  ) [  evento . tipo  ]  &&
				dataPriv . get (  cur ,  "manipular"  ) ;
			if  (  lidar  )  {
				alça . aplicar (  cur ,  dados  ) ;
			}

			// Handler nativo
			lidar  =  ontipo  &&  cur [  ontipo  ] ;
			if  (  manipular  &&  manipular . aplicar  &&  acceptData (  cur  )  )  {
				evento . resultado  =  manuseio . aplicar (  cur ,  dados  ) ;
				if  (  evento . resultado  ===  falso  )  {
					evento . preventDefault ( ) ;
				}
			}
		}
		evento . tipo  =  tipo ;

		// Se ninguém impediu a ação padrão, faça agora
		if  (  ! onlyHandlers  &&  ! event . isDefaultPrevented ( )  )  {

			if  (  (  ! especial . _padrão  ||
				especial . _default . aplicar (  eventPath . pop ( ) ,  dados  )  ===  falso  )  &&
				aceitarData (  elem  )  )  {

				// Chame um método DOM nativo no destino com o mesmo nome do evento.
				// Não execute ações padrão na janela, é onde as variáveis ​​globais estão (# 6170)
				if  (  ontype  &&  jQuery . isFunction (  elem [  type  ]  )  &&  ! jQuery . isWindow (  elem  )  )  {

					// Não acione novamente um evento onFOO quando chamamos seu método FOO ()
					tmp  =  elem [  ontipo  ] ;

					if  (  tmp  )  {
						elem [  ontype  ]  =  null ;
					}

					// Impedir o novo acionamento do mesmo evento, uma vez que já o borbulhamos acima
					jQuery . evento . disparado  =  tipo ;
					elem [  tipo  ] ( ) ;
					jQuery . evento . disparado  =  indefinido ;

					if  (  tmp  )  {
						elem [  ontipo  ]  =  tmp ;
					}
				}
			}
		}

		 evento de retorno . resultado ;
	} ,

	// Pegue carona em um evento de doador para simular um diferente
	// Usado apenas para eventos `focus (in | out)`
	simular : função (  tipo ,  elemento ,  evento  )  {
		var  e  =  jQuery . extender (
			novo  jQuery . Evento ( ) ,
			evento ,
			{
				tipo : tipo ,
				isSimulated : true
			}
		) ;

		jQuery . evento . gatilho (  e ,  nulo ,  elem  ) ;
	}

}  ) ;

jQuery . fn . extend (  {

	gatilho : função (  tipo ,  dados  )  {
		devolva  isso . cada (  função ( )  {
			jQuery . evento . gatilho (  tipo ,  dados ,  este  ) ;
		}  ) ;
	} ,
	triggerHandler : function (  type ,  data  )  {
		var  elem  =  este [  0  ] ;
		if  (  elem  )  {
			return  jQuery . evento . gatilho (  tipo ,  dados ,  elem ,  verdadeiro  ) ;
		}
	}
}  ) ;


jQuery . cada (  (  "desfocar foco foco em foco fora redimensionar rolagem clique dblclique"  +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave"  +
	"alterar selecionar enviar keydown keypress keyup contextmenu"  ) . dividir (  ""  ) ,
	função (  i ,  nome  )  {

	// Manipular associação de evento
	jQuery . fn [  nome  ]  =  função (  dados ,  fn  )  {
		retornar  argumentos . comprimento  >  0 ?
			isso . em (  nome ,  nulo ,  dados ,  fn  ) :
			isso . gatilho (  nome  ) ;
	} ;
}  ) ;

jQuery . fn . extend (  {
	pairar : function (  fnOver ,  fnOut  )  {
		devolva  isso . mouseenter (  fnOver  ) . mouseleave (  fnOut  ||  fnOver  ) ;
	}
}  ) ;




suporte . focusin  =  "onfocusin"  na  janela ;


// Suporte: Firefox <= 44
// Firefox não tem eventos focus (in | out)
// Tíquete relacionado - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Suporte: Chrome <= 48 - 49, Safari <= 9,0 - 9,1
// eventos de foco (entrada | saída) disparam após eventos de foco e desfoque,
// que é violação de especificação - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Tíquete relacionado - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if  (  ! support . focusin  )  {
	jQuery . cada (  {  focus : "focusin" ,  blur : "focusout"  } ,  função (  orig ,  fix  )  {

		// Anexe um único manipulador de captura ao documento enquanto alguém deseja focusin / focusout
		var  handler  =  function (  event  )  {
			jQuery . evento . simular (  consertar ,  evento . destino ,  jQuery . evento . consertar (  evento  )  ) ;
		} ;

		jQuery . evento . especial [  correção  ]  =  {
			configuração : função ( )  {
				var  doc  =  this . ownerDocument  ||  isso ,
					attaches  =  dataPriv . acessar (  doc ,  corrigir  ) ;

				if  (  ! attaches  )  {
					doc . addEventListener (  orig ,  manipulador ,  true  ) ;
				}
				dataPriv . access (  doc ,  fix ,  (  attaches  ||  0  )  +  1  ) ;
			} ,
			teardown : function ( )  {
				var  doc  =  this . ownerDocument  ||  isso ,
					attaches  =  dataPriv . acesso (  doc ,  correção  )  -  1 ;

				if  (  ! attaches  )  {
					doc . removeEventListener (  orig ,  manipulador ,  true  ) ;
					dataPriv . remover (  doc ,  corrigir  ) ;

				}  else  {
					dataPriv . acesso (  doc ,  fix ,  attaches  ) ;
				}
			}
		} ;
	}  ) ;
}
var  location  =  window . localização ;

var  nonce  =  jQuery . agora ( ) ;

var  rquery  =  (  / \? /  ) ;



// Análise de xml em vários navegadores
jQuery . parseXML  =  função (  dados  )  {
	var  xml ;
	if  (  ! data  ||  typeof  data  ! ==  "string"  )  {
		return  null ;
	}

	// Suporte: IE 9 - 11 apenas
	// IE lança em parseFromString com entrada inválida.
	tente  {
		xml  =  (  nova  janela . DOMParser ( )  ) . parseFromString (  dados ,  "text / xml"  ) ;
	}  catch  (  e  )  {
		xml  =  indefinido ;
	}

	if  (  ! xml  ||  xml . getElementsByTagName (  "parsererror"  ) . length  )  {
		jQuery . erro (  "XML inválido:"  +  dados  ) ;
	}
	return  xml ;
} ;


var
	rbracket  =  / \ [ \] $ / ,
	rCRLF  =  / \ r ? \ n / g ,
	rsubmitterTypes  =  / ^ (?: enviar | botão | imagem | redefinir | arquivo ) $ / i ,
	rsubmittable  =  / ^ (?: input | select | textarea | keygen ) / i ;

function  buildParams (  prefix ,  obj ,  traditional ,  add  )  {
	var  name ;

	if  (  Array . isArray (  obj  )  )  {

		// Serialize o item da matriz.
		jQuery . cada (  obj ,  função (  i ,  v  )  {
			if  (  tradicional  ||  rbracket . test (  prefixo  )  )  {

				// Trate cada item do array como um escalar.
				adicionar (  prefixo ,  v  ) ;

			}  else  {

				// O item não é escalar (matriz ou objeto), codifique seu índice numérico.
				buildParams (
					prefixo  +  "["  +  (  typeof  v  ===  "objeto"  &&  v  ! =  null ? i : ""  )  +  "]" ,
					v ,
					tradicional ,
					adicionar
				) ;
			}
		}  ) ;

	}  else  if  (  ! tradicional  &&  jQuery . type (  obj  )  ===  "objeto"  )  {

		// Serializa o item do objeto.
		para  (  nome  em  obj  )  {
			buildParams (  prefixo  +  "["  +  nome  +  "]" ,  obj [  nome  ] ,  tradicional ,  adicionar  ) ;
		}

	}  else  {

		// Serializa o item escalar.
		adicionar (  prefixo ,  obj  ) ;
	}
}

// Serializa uma matriz de elementos de formulário ou um conjunto de
// chave / valores em uma string de consulta
jQuery . param  =  função (  a ,  tradicional  )  {
	var  prefix ,
		s  =  [ ] ,
		add  =  function (  key ,  valueOrFunction  )  {

			// Se o valor for uma função, invoque-o e use seu valor de retorno
			 valor  var =  jQuery . isFunction (  valueOrFunction  ) ?
				valueOrFunction ( ) :
				valueOrFunction ;

			s [  s . comprimento  ]  =  encodeURIComponent (  chave  )  +  "="  +
				encodeURIComponent (  value  ==  null ? "" : value  ) ;
		} ;

	// Se um array foi passado, suponha que seja um array de elementos de formulário.
	if  (  Array . isArray (  a  )  ||  (  a . jquery  &&  ! jQuery . isPlainObject (  a  )  )  )  {

		// Serializa os elementos do formulário
		jQuery . each (  a ,  function ( )  {
			adicionar (  este . nome ,  este . valor  ) ;
		}  ) ;

	}  else  {

		// Se tradicional, codifique da maneira "antiga" (a maneira 1.3.2 ou mais antiga
		// fez), caso contrário, codifique os parâmetros recursivamente.
		para  (  prefixo  em  a  )  {
			buildParams (  prefixo ,  a [  prefixo  ] ,  tradicional ,  adicionar  ) ;
		}
	}

	// Retorna a serialização resultante
	return  s . juntar (  "&"  ) ;
} ;

jQuery . fn . extend (  {
	serialize : function ( )  {
		return  jQuery . param (  this . serializeArray ( )  ) ;
	} ,
	serializeArray : function ( )  {
		devolva  isso . map (  function ( )  {

			// Pode adicionar propHook para "elementos" para filtrar ou adicionar elementos de formulário
			var  elements  =  jQuery . prop (  isto ,  "elementos"  ) ;
			 elementos de retorno ? jQuery . makeArray (  elementos  ) : isso ;
		}  )
		. filtro (  função ( )  {
			var  type  =  this . tipo ;

			// Use .is (": disabled") para que o fieldset [disabled] funcione
			devolva  isso . nome  &&  ! jQuery (  isso  ) . é (  ": desativado"  )  &&
				rsubmittable . teste (  this . nodeName  )  &&  ! rsubmitterTypes . teste (  tipo  )  &&
				(  este . verificado  ||  ! rcheckableType . test (  type  )  ) ;
		}  )
		. map (  função (  i ,  elem  )  {
			var  val  =  jQuery (  this  ) . val ( ) ;

			if  (  val  ==  null  )  {
				return  null ;
			}

			if  (  Array . isArray (  val  )  )  {
				return  jQuery . map (  val ,  function (  val  )  {
					return  {  name : elem . nome ,  valor : val . substituir (  rCRLF ,  "\ r \ n"  )  } ;
				}  ) ;
			}

			return  {  name : elem . nome ,  valor : val . substituir (  rCRLF ,  "\ r \ n"  )  } ;
		}  ) . get ( ) ;
	}
}  ) ;


var
	r20  =  / % 20 / g ,
	rhash  =  / #. * $ / ,
	rantiCache  =  / ( [ ? & ] ) _ = [ ^ & ] * / ,
	rheaders  =  / ^ ( . * ? ) : [  \ t ] * ( [ ^ \ r \ n ] * ) $ / mg ,

	// # 7653, # 8125, # 8152: detecção de protocolo local
	rlocalProtocol  =  / ^ (?: about | app | app-storage | . + -extension | file | res | widget ) : $ / ,
	rnoContent  =  / ^ (?: GET | HEAD ) $ / ,
	rprotocol  =  / ^ \ / \ / / ,

	/ * Prefilters
	 * 1) Eles são úteis para introduzir dataTypes personalizados (consulte ajax / jsonp.js para obter um exemplo)
	 * 2) São os chamados:
	 * - ANTES de pedir transporte
	 * - APÓS a serialização do parâmetro (s.data é uma string se s.processData for verdadeiro)
	 * 3) a chave é o dataType
	 * 4) o símbolo genérico "*" pode ser usado
	 * 5) a execução começará com o tipo de dados de transporte e ENTÃO continuará até "*" se necessário
	 * /
	pré-filtros  =  { } ,

	/ * Ligações de transporte
	 * 1) a chave é o dataType
	 * 2) o símbolo genérico "*" pode ser usado
	 * 3) a seleção começará com o tipo de dados de transporte e ENTÃO irá para "*" se necessário
	 * /
	transportes  =  { } ,

	// Evita a sequência de caracteres do prólogo de comentário (# 10098); deve apaziguar fiapos e evitar compressão
	allTypes  =  "* /" . concat (  "*"  ) ,

	// Tag âncora para analisar a origem do documento
	originAnchor  =  document . createElement (  "a"  ) ;
	originAnchor . href  =  localização . href ;

// Base "construtor" para jQuery.ajaxPrefilter e jQuery.ajaxTransport
function  addToPrefiltersOrTransports (  structure  )  {

	// dataTypeExpression é opcional e o padrão é "*"
	 função de retorno (  dataTypeExpression ,  func  )  {

		if  (  typeof  dataTypeExpression  ! ==  "string"  )  {
			func  =  dataTypeExpression ;
			dataTypeExpression  =  "*" ;
		}

		var  dataType ,
			i  =  0 ,
			dataTypes  =  dataTypeExpression . toLowerCase ( ) . combinar (  rnothtmlwhite  )  ||  [ ] ;

		if  (  jQuery . isFunction (  func  )  )  {

			// Para cada dataType na dataTypeExpression
			while  (  (  dataType  =  dataTypes [  i ++  ]  )  )  {

				// Preceder se solicitado
				if  (  dataType [  0  ]  ===  "+"  )  {
					dataType  =  dataType . fatia (  1  )  ||  "*" ;
					(  estrutura [  dataType  ]  =  estrutura [  dataType  ]  ||  [ ]  ) . unshift (  func  ) ;

				// Caso contrário, anexe
				}  else  {
					(  estrutura [  dataType  ]  =  estrutura [  dataType  ]  ||  [ ]  ) . push (  func  ) ;
				}
			}
		}
	} ;
}

// Função de inspeção de base para pré-filtros e transportes
function  inspectPrefiltersOrTransports (  structure ,  options ,  originalOptions ,  jqXHR  )  {

	var  inspecionado  =  { } ,
		buscandoTransport  =  (  estrutura  ===  transportes  ) ;

	function  inspect (  dataType  )  {
		var  selecionado ;
		inspecionado [  dataType  ]  =  verdadeiro ;
		jQuery . each (  estrutura [  dataType  ]  ||  [ ] ,  função (  _ ,  prefilterOrFactory  )  {
			var  dataTypeOrTransport  =  prefilterOrFactory (  opções ,  originalOptions ,  jqXHR  ) ;
			if  (  typeof  dataTypeOrTransport  ===  "string"  &&
				! buscandoTransport  &&  ! inspecionado [  dataTypeOrTransport  ]  )  {

				opções . dataTypes . unshift (  dataTypeOrTransport  ) ;
				inspecionar (  dataTypeOrTransport  ) ;
				return  false ;
			}  mais  se  (  buscando transporte  )  {
				volte  ! (  selecionado  =  dataTypeOrTransport  ) ;
			}
		}  ) ;
		retorno  selecionado ;
	}

	return  inspect (  options . dataTypes [  0  ]  )  ||  ! inspecionado [  "*"  ]  &&  inspect (  "*"  ) ;
}

// Uma extensão especial para opções ajax
// isso requer opções "planas" (não devem ser estendidas profundamente)
// Correções # 9887
function  ajaxExtend (  target ,  src  )  {
	var  key ,  deep ,
		flatOptions  =  jQuery . ajaxSettings . flatOptions  ||  { } ;

	para  (  chave  em  src  )  {
		if  (  src [  chave  ]  ! ==  indefinido  )  {
			(  flatOptions [  key  ] ? target : (  deep  ||  (  deep  =  { }  )  )  ) [  key  ]  =  src [  key  ] ;
		}
	}
	if  (  profundo  )  {
		jQuery . extender (  verdadeiro ,  alvo ,  profundo  ) ;
	}

	 alvo de retorno ;
}

/ * Lida com respostas a uma solicitação ajax:
 * - encontra o dataType correto (faz a mediação entre o tipo de conteúdo e o dataType esperado)
 * - retorna a resposta correspondente
 * /
function  ajaxHandleResponses (  s ,  jqXHR ,  responses  )  {

	var  ct ,  type ,  finalDataType ,  firstDataType ,
		conteúdo  =  s . conteúdo ,
		dataTypes  =  s . dataTypes ;

	// Remova auto dataType e obtenha o tipo de conteúdo no processo
	while  (  dataTypes [  0  ]  ===  "*"  )  {
		dataTypes . shift ( ) ;
		if  (  ct  ===  undefined  )  {
			ct  =  s . mimeType  ||  jqXHR . getResponseHeader (  "Content-Type"  ) ;
		}
	}

	// Verifique se estamos lidando com um tipo de conteúdo conhecido
	if  (  ct  )  {
		para  (  digitar  no  conteúdo  )  {
			if  (  conteúdo [  tipo  ]  &&  conteúdo [  tipo  ] . teste (  ct  )  )  {
				dataTypes . unshift (  tipo  ) ;
				pausa ;
			}
		}
	}

	// Verifique se temos uma resposta para o dataType esperado
	if  (  dataTypes [  0  ]  nas  respostas  )  {
		finalDataType  =  dataTypes [  0  ] ;
	}  else  {

		// Experimente conversíveis dataTypes
		para  (  digitar  em  respostas  )  {
			if  (  ! dataTypes [  0  ]  ||  s . conversores [  type  +  ""  +  dataTypes [  0  ]  ]  )  {
				finalDataType  =  type ;
				pausa ;
			}
			if  (  ! firstDataType  )  {
				firstDataType  =  type ;
			}
		}

		// Ou apenas use o primeiro
		finalDataType  =  finalDataType  ||  firstDataType ;
	}

	// Se encontrarmos um dataType
	// Adicionamos dataType à lista, se necessário
	// e retorna a resposta correspondente
	if  (  finalDataType  )  {
		if  (  finalDataType  ! ==  dataTypes [  0  ]  )  {
			dataTypes . unshift (  finalDataType  ) ;
		}
		retornar  respostas [  finalDataType  ] ;
	}
}

/ * Conversões em cadeia de acordo com a solicitação e a resposta original
 * Também define os campos responseXXX na instância jqXHR
 * /
function  ajaxConvert (  s ,  response ,  jqXHR ,  isSuccess  )  {
	var  conv2 ,  atual ,  conv ,  tmp ,  prev ,
		conversores  =  { } ,

		// Trabalhe com uma cópia de dataTypes no caso de precisarmos modificá-lo para conversão
		dataTypes  =  s . dataTypes . fatia ( ) ;

	// Crie um mapa de conversores com chaves em minúsculas
	if  (  dataTypes [  1  ]  )  {
		para  (  conversores conv  em  s . ) {
			conversores [  conv . toLowerCase ( )  ]  =  s . conversores [  conv  ] ;
		}
	}

	current  =  dataTypes . shift ( ) ;

	// Converter para cada dataType sequencial
	while  (  atual  )  {

		if  (  s . responseFields [  atual  ]  )  {
			jqXHR [  s . responseFields [  atual  ]  ]  =  resposta ;
		}

		// Aplique o dataFilter se fornecido
		if  (  ! prev  &&  isSuccess  &&  s . dataFilter  )  {
			resposta  =  s . dataFilter (  resposta ,  s . dataType  ) ;
		}

		prev  =  atual ;
		current  =  dataTypes . shift ( ) ;

		if  (  atual  )  {

			// Só há trabalho a fazer se dataType atual não for automático
			if  (  atual  ===  "*"  )  {

				atual  =  anterior ;

			// Converte a resposta se o tipo de dados anterior não for automático e for diferente do atual
			}  else  if  (  prev  ! ==  "*"  &&  prev  ! ==  atual  )  {

				// Procure um conversor direto
				conv  =  conversores [  anterior  +  ""  +  atual  ]  ||  conversores [  "*"  +  atual  ] ;

				// Se nenhum for encontrado, procure um par
				if  (  ! conv  )  {
					para  (  conv2  em  conversores  )  {

						// Se conv2 gerar corrente
						tmp  =  conv2 . dividir (  ""  ) ;
						if  (  tmp [  1  ]  ===  atual  )  {

							// Se a prev pode ser convertida para entrada aceita
							conv  =  conversores [  prev  +  ""  +  tmp [  0  ]  ]  ||
								conversores [  "*"  +  tmp [  0  ]  ] ;
							if  (  conv  )  {

								// Conversores de equivalência de condensação
								if  (  conv  ===  true  )  {
									conv  =  conversores [  conv2  ] ;

								// Caso contrário, insira o dataType intermediário
								}  else  if  (  conversores [  conv2  ]  ! ==  true  )  {
									corrente  =  tmp [  0  ] ;
									dataTypes . unshift (  tmp [  1  ]  ) ;
								}
								pausa ;
							}
						}
					}
				}

				// Aplicar conversor (se não for uma equivalência)
				if  (  conv  ! ==  true  )  {

					// A menos que os erros possam surgir, identifique-os e retorne-os
					if  (  conv  &&  s . throws  )  {
						resposta  =  conv (  resposta  ) ;
					}  else  {
						tente  {
							resposta  =  conv (  resposta  ) ;
						}  catch  (  e  )  {
							return  {
								estado : "parsererror" ,
								erro : conv ? e : "Sem conversão de"  +  anterior  +  "para"  +  atual
							} ;
						}
					}
				}
			}
		}
	}

	retornar  {  estado : "sucesso" ,  dados : resposta  } ;
}

jQuery . extend (  {

	// Contador para conter o número de consultas ativas
	ativo : 0 ,

	// Cache de cabeçalho modificado pela última vez para a próxima solicitação
	lastModified : { } ,
	etag : { } ,

	ajaxSettings : {
		url : localização . href ,
		digite : "GET" ,
		isLocal : rlocalProtocol . teste (  localização . protocolo  ) ,
		global : verdadeiro ,
		processData : true ,
		async : true ,
		contentType : "application / x-www-form-urlencoded; charset = UTF-8" ,

		/ *
		tempo limite: 0,
		dados: nulo,
		dataType: null,
		nome de usuário: null,
		senha: nulo,
		cache: null,
		joga: falso,
		tradicional: falso,
		cabeçalhos: {},
		* /

		aceita : {
			"*" : allTypes ,
			texto : "texto / simples" ,
			html : "text / html" ,
			xml : "application / xml, text / xml" ,
			json : "application / json, text / javascript"
		} ,

		conteúdo : {
			xml : / \ b xml \ b / ,
			html : / \ b html / ,
			json : / \ b json \ b /
		} ,

		responseFields : {
			xml : "responseXML" ,
			text : "responseText" ,
			json : "responseJSON"
		} ,

		// Conversores de dados
		// Chaves separam a fonte (ou catchall "*") e os tipos de destino com um único espaço
		conversores : {

			// Converta qualquer coisa em texto
			"* texto" : String ,

			// Texto para html (verdadeiro = sem transformação)
			"text html" : verdadeiro ,

			// Avalie o texto como uma expressão json
			"text json" : JSON . analisar ,

			// Analisa o texto como xml
			"text xml" : jQuery . parseXML
		} ,

		// Para opções que não devem ser profundamente estendidas:
		// você pode adicionar suas próprias opções personalizadas aqui se
		// e quando você cria um que não deveria ser
		// estendido profundamente (consulte ajaxExtend)
		flatOptions : {
			url : verdadeiro ,
			contexto : verdadeiro
		}
	} ,

	// Cria um objeto de configurações completo no destino
	// com os campos ajaxSettings e configurações.
	// Se o destino for omitido, grava em ajaxSettings.
	ajaxSetup : function (  target ,  settings  )  {
		 configurações de retorno ?

			// Construindo um objeto de configurações
			ajaxExtend (  ajaxExtend (  target ,  jQuery . ajaxSettings  ) ,  configurações  ) :

			// Estendendo ajaxSettings
			ajaxExtend (  jQuery . ajaxSettings ,  destino  ) ;
	} ,

	ajaxPrefilter : addToPrefiltersOrTransports (  pré-filtros  ) ,
	ajaxTransport : addToPrefiltersOrTransports (  transports  ) ,

	// Método principal
	ajax : função (  url ,  opções  )  {

		// Se url for um objeto, simule a assinatura pré-1.5
		if  (  typeof  url  ===  "objeto"  )  {
			options  =  url ;
			url  =  indefinido ;
		}

		// Força as opções a serem um objeto
		opções  =  opções  ||  { } ;

		var  transport ,

			// URL sem parâmetro anti-cache
			cacheURL ,

			// Cabeçalhos de resposta
			responseHeadersString ,
			responseHeaders ,

			// controle de tempo limite
			timeoutTimer ,

			// Url cleanup var
			urlAnchor ,

			// Estado da solicitação (torna-se falso após o envio e verdadeiro após a conclusão)
			completado ,

			// Para saber se os eventos globais devem ser despachados
			fireGlobals ,

			// Variável de loop
			eu ,

			// parte não anexada do url
			solto ,

			// Cria o objeto de opções finais
			s  =  jQuery . ajaxSetup (  { } ,  opções  ) ,

			// Contexto de callbacks
			callbackContext  =  s . contexto  ||  s ,

			// O contexto para eventos globais é callbackContext se for um nó DOM ou coleção jQuery
			globalEventContext  =  s . contexto  &&
				(  callbackContext . nodeType  ||  callbackContext . jquery  ) ?
					jQuery (  callbackContext  ) :
					jQuery . evento ,

			// Deferreds
			adiado  =  jQuery . Adiado ( ) ,
			completeDeferred  =  jQuery . Callbacks (  "uma vez na memória"  ) ,

			// Callbacks dependentes de status
			statusCode  =  s . statusCode  ||  { } ,

			// Cabeçalhos (são enviados todos de uma vez)
			requestHeaders  =  { } ,
			requestHeadersNames  =  { } ,

			// Mensagem de aborto padrão
			strAbort  =  "cancelado" ,

			// Fake xhr
			jqXHR  =  {
				readyState : 0 ,

				// Cria cabeçalhos hashtable se necessário
				getResponseHeader : function (  key  )  {
					var  match ;
					if  (  concluído  )  {
						if  (  ! responseHeaders  )  {
							responseHeaders  =  { } ;
							while  (  (  match  =  rheaders . exec (  responseHeadersString  )  )  )  {
								responseHeaders [  correspondência [  1  ] . toLowerCase ( )  ]  =  correspondência [  2  ] ;
							}
						}
						match  =  responseHeaders [  chave . toLowerCase ( )  ] ;
					}
					return  match  ==  null ? null : match ;
				} ,

				// String bruta
				getAllResponseHeaders : function ( )  {
					retorno  concluído ? responseHeadersString : null ;
				} ,

				// Armazena o cabeçalho em cache
				setRequestHeader : function (  name ,  value  )  {
					if  (  concluído  ==  null  )  {
						name  =  requestHeadersNames [  nome . toLowerCase ( )  ]  =
							requestHeadersNames [  nome . toLowerCase ( )  ]  ||  nome ;
						requestHeaders [  nome  ]  =  valor ;
					}
					devolva  isso ;
				} ,

				// Substitui o cabeçalho de tipo de conteúdo de resposta
				overrideMimeType : function (  type  )  {
					if  (  concluído  ==  null  )  {
						s . mimeType  =  type ;
					}
					devolva  isso ;
				} ,

				// Callbacks dependentes de status
				statusCode : function (  map  )  {
					var  code ;
					if  (  mapa  )  {
						if  (  concluído  )  {

							// Execute os retornos de chamada apropriados
							jqXHR . sempre (  mapa [  jqXHR . status  ]  ) ;
						}  else  {

							// Lazy-adicione os novos callbacks de uma forma que preserva os antigos
							para  (  código  no  mapa  )  {
								statusCode [  código  ]  =  [  statusCode [  código  ] ,  mapa [  código  ]  ] ;
							}
						}
					}
					devolva  isso ;
				} ,

				// Cancelar o pedido
				abort : function (  statusText  )  {
					var  finalText  =  statusText  ||  strAbort ;
					if  (  transporte  )  {
						transporte . abortar (  finalText  ) ;
					}
					feito (  0 ,  texto final  ) ;
					devolva  isso ;
				}
			} ;

		// Anexar adiados
		diferido . promessa (  jqXHR  ) ;

		// Adicione protocolo se não for fornecido (pré-filtros podem esperar isso)
		// Lidar com url falso no objeto de configurações (# 10093: consistência com assinatura antiga)
		// Também usamos o parâmetro url, se disponível
		s . url  =  (  (  url  ||  s . url  ||  localização . href  )  +  ""  )
			. substituir (  protocolo ,  localização . protocolo  +  "//"  ) ;

		// Opção de método de alias para digitar de acordo com o tíquete # 12004
		s . type  =  options . método  ||  opções . tipo  ||  s . método  ||  s . tipo ;

		// Extraia a lista dataTypes
		s . dataTypes  =  (  s . dataType  ||  "*"  ) . toLowerCase ( ) . combinar (  rnothtmlwhite  )  ||  [  ""  ] ;

		// Uma solicitação de domínio cruzado está em ordem quando a origem não corresponde à origem atual.
		if  (  s . crossDomain  ==  null  )  {
			urlAnchor  =  documento . createElement (  "a"  ) ;

			// Suporte: IE <= 8 - 11, Edge 12 - 13
			// O IE lança uma exceção ao acessar a propriedade href se o url estiver malformado,
			// por exemplo, http://example.com:80x/
			tente  {
				urlAnchor . href  =  s . url ;

				// Suporte: IE <= 8 - 11 apenas
				// A propriedade do host da âncora não está definida corretamente quando s.url é relativo
				urlAnchor . href  =  urlAnchor . href ;
				s . crossDomain  =  originAnchor . protocolo  +  "//"  +  originAnchor . host  ! ==
					urlAnchor . protocolo  +  "//"  +  urlAnchor . hospedeiro ;
			}  catch  (  e  )  {

				// Se houver um erro ao analisar o URL, suponha que seja crossDomain,
				// pode ser rejeitado pelo transporte se for inválido
				s . crossDomain  =  verdadeiro ;
			}
		}

		// Converte dados se ainda não for uma string
		if  (  s . data  &&  s . processData  &&  typeof  s . data  ! ==  "string"  )  {
			s . dados  =  jQuery . param (  s . dados ,  v . tradicional  ) ;
		}

		// Aplicar pré-filtros
		inspectPrefiltersOrTransports (  pré-filtros ,  s ,  opções ,  jqXHR  ) ;

		// Se a solicitação foi abortada dentro de um pré-filtro, pare aí
		if  (  concluído  )  {
			return  jqXHR ;
		}

		// Podemos disparar eventos globais a partir de agora, se solicitados a
		// Não dispare eventos se jQuery.event for indefinido em um cenário de uso de AMD (# 15118)
		fireGlobals  =  jQuery . evento  &&  s . global ;

		// Observe um novo conjunto de solicitações
		if  (  fireGlobals  &&  jQuery . active ++  ===  0  )  {
			jQuery . evento . trigger (  "ajaxStart"  ) ;
		}

		// Letras maiúsculas
		s . tipo  =  s . tipo . toUpperCase ( ) ;

		// Determine se a solicitação tem conteúdo
		s . hasContent  =  ! rnoContent . teste (  s . tipo  ) ;

		// Salve o URL caso estejamos brincando com If-Modified-Since
		// e / ou cabeçalho If-None-Match posteriormente
		// Remova o hash para simplificar a manipulação de url
		cacheURL  =  s . url . substituir (  rhash ,  ""  ) ;

		// Mais opções de tratamento para solicitações sem conteúdo
		if  (  ! s . hasContent  )  {

			// Lembre-se do hash para que possamos colocá-lo de volta
			não anexado  =  s . url . fatia (  cacheURL . comprimento  ) ;

			// Se houver dados disponíveis, anexe os dados ao url
			if  (  s . dados  )  {
				cacheURL  + =  (  rquery . test (  cacheURL  ) ? "&" : "?"  )  +  s . dados ;

				// # 9682: remove os dados para que não sejam usados ​​em uma tentativa eventual
				delete  s . dados ;
			}

			// Adicione ou atualize o parâmetro anti-cache se necessário
			if  (  s . cache  ===  false  )  {
				cacheURL  =  cacheURL . substituir (  rantiCache ,  "$ 1"  ) ;
				sem cache  =  (  rquery . test (  cacheURL  ) ? "&" : "?"  )  +  "_ ="  +  (  nonce ++  )  + sem  cache ;
			}

			// Coloque hash e anti-cache no URL que será solicitado (gh-1732)
			s . url  =  cacheURL  + sem  cache ;

		// Altere '% 20' para '+' se este for codificado do conteúdo do corpo (gh-2658)
		}  else  if  (  s . data  &&  s . processData  &&
			(  s . contentType  ||  ""  ) . indexOf (  "application / x-www-form-urlencoded"  )  ===  0  )  {
			s . dados  =  s . dados . substitua (  r20 ,  "+"  ) ;
		}

		// Defina o cabeçalho If-Modified-Since e / ou If-None-Match, se estiver no modo ifModified.
		if  (  s . ifModified  )  {
			if  (  jQuery . lastModified [  cacheURL  ]  )  {
				jqXHR . setRequestHeader (  "If-Modified-Since" ,  jQuery . lastModified [  cacheURL  ]  ) ;
			}
			if  (  jQuery . etag [  cacheURL  ]  )  {
				jqXHR . setRequestHeader (  "If-None-Match" ,  jQuery . etag [  cacheURL  ]  ) ;
			}
		}

		// Defina o cabeçalho correto, se os dados estiverem sendo enviados
		if  (  s . dados  &&  s . hasContent  &&  s . contentType  ! ==  false  ||  options . contentType  )  {
			jqXHR . setRequestHeader (  "Content-Type" ,  s . contentType  ) ;
		}

		// Defina o cabeçalho Aceita para o servidor, dependendo do dataType
		jqXHR . setRequestHeader (
			"Aceitar" ,
			s . dataTypes [  0  ]  &&  s . aceita [  s . dataTypes [  0  ]  ] ?
				s . aceita [  s . dataTypes [  0  ]  ]  +
					(  s . dataTypes [  0  ]  ! ==  "*" ? ","  +  allTypes  +  "; q = 0,01" : ""  ) :
				s . aceita [  "*"  ]
		) ;

		// Verifique a opção de cabeçalhos
		para  (  i  em  cabeçalhos s . ) {
			jqXHR . setRequestHeader (  i ,  s . cabeçalhos [  i  ]  ) ;
		}

		// Permitir cabeçalhos / tipos MIME personalizados e abortar antecipadamente
		if  (  s . beforeSend  &&
			(  s . beforeSend . call (  callbackContext ,  jqXHR ,  s  )  ===  false  ||  concluído  )  )  {

			// Abortar se ainda não o tiver feito e retornar
			return  jqXHR . abortar ( ) ;
		}

		// Abortar não é mais um cancelamento
		strAbort  =  "abortar" ;

		// Instalar callbacks em adiados
		completeDeferred . adicionar (  s . completo  ) ;
		jqXHR . feito (  s . sucesso  ) ;
		jqXHR . falha (  s . erro  ) ;

		// Obter transporte
		transport  =  inspectPrefiltersOrTransports (  transportes ,  s ,  opções ,  jqXHR  ) ;

		// Se não houver transporte, nós abortamos automaticamente
		if  (  ! transporte  )  {
			feito (  - 1 ,  "Sem transporte"  ) ;
		}  else  {
			jqXHR . readyState  =  1 ;

			// Enviar evento global
			if  (  fireGlobals  )  {
				globalEventContext . trigger (  "ajaxSend" ,  [  jqXHR ,  s  ]  ) ;
			}

			// Se a solicitação foi abortada dentro de ajaxSend, pare aí
			if  (  concluído  )  {
				return  jqXHR ;
			}

			// Tempo esgotado
			if  (  s . assíncrono  &&  s . tempo limite  >  0  )  {
				timeoutTimer  =  janela . setTimeout (  function ( )  {
					jqXHR . abortar (  "tempo limite"  ) ;
				} ,  s . tempo limite  ) ;
			}

			tente  {
				concluído  =  falso ;
				transporte . enviar (  requestHeaders ,  concluído  ) ;
			}  catch  (  e  )  {

				// Volte a lançar exceções pós-conclusão
				if  (  concluído  )  {
					jogue  e ;
				}

				// Propagar outros como resultados
				feito (  - 1 ,  e  ) ;
			}
		}

		// Callback para quando tudo estiver feito
		function  done (  status ,  nativeStatusText ,  responses ,  headers  )  {
			var  isSuccess ,  sucesso ,  erro ,  resposta ,  modificado ,
				statusText  =  nativeStatusText ;

			// Ignorar invocações repetidas
			if  (  concluído  )  {
				retorno ;
			}

			concluído  =  verdadeiro ;

			// Limpe o tempo limite, se existir
			if  (  timeoutTimer  )  {
				janela . clearTimeout (  timeoutTimer  ) ;
			}

			// Transporte de desreferência para coleta de lixo antecipada
			// (não importa por quanto tempo o objeto jqXHR será usado)
			transporte  =  indefinido ;

			// Cache response headers
			responseHeadersString  =  headers  ||  "" ;

			// Definir readyState
			jqXHR . readyState  =  status  >  0 ? 4 : 0 ;

			// Determine se foi bem-sucedido
			isSuccess  =  status  > =  200  &&  status  <  300  ||  status  ===  304 ;

			// Obter dados de resposta
			if  (  respostas  )  {
				resposta  =  ajaxHandleResponses (  s ,  jqXHR ,  respostas  ) ;
			}

			// Converta não importa o quê (dessa forma os campos responseXXX são sempre definidos)
			resposta  =  ajaxConvert (  s ,  resposta ,  jqXHR ,  isSuccess  ) ;

			// Se for bem-sucedido, manipule o encadeamento de tipo
			if  (  isSuccess  )  {

				// Defina o cabeçalho If-Modified-Since e / ou If-None-Match, se estiver no modo ifModified.
				if  (  s . ifModified  )  {
					modificado  =  jqXHR . getResponseHeader (  "Última modificação"  ) ;
					if  (  modificado  )  {
						jQuery . lastModified [  cacheURL  ]  =  modificado ;
					}
					modificado  =  jqXHR . getResponseHeader (  "etag"  ) ;
					if  (  modificado  )  {
						jQuery . etag [  cacheURL  ]  =  modificado ;
					}
				}

				// se nenhum conteúdo
				if  (  status  ===  204  ||  s . type  ===  "HEAD"  )  {
					statusText  =  "nocontent" ;

				// se não for modificado
				}  else  if  (  status  ===  304  )  {
					statusText  =  "não modificado" ;

				// Se tivermos dados, vamos convertê-los
				}  else  {
					statusText  =  resposta . estado ;
					sucesso  =  resposta . dados ;
					erro  =  resposta . erro ;
					isSuccess  =  ! erro ;
				}
			}  else  {

				// Extraia o erro de statusText e normalize para não abortos
				erro  =  statusText ;
				if  (  status  ||  ! statusText  )  {
					statusText  =  "erro" ;
					if  (  status  <  0  )  {
						status  =  0 ;
					}
				}
			}

			// Definir dados para o objeto xhr falso
			jqXHR . status  =  status ;
			jqXHR . statusText  =  (  nativeStatusText  ||  statusText  )  +  "" ;

			// Sucesso / Erro
			if  (  isSuccess  )  {
				diferido . resolveWith (  callbackContext ,  [  sucesso ,  statusText ,  jqXHR  ]  ) ;
			}  else  {
				diferido . rejeitarWith (  callbackContext ,  [  jqXHR ,  statusText ,  erro  ]  ) ;
			}

			// Callbacks dependentes de status
			jqXHR . statusCode (  statusCode  ) ;
			statusCode  =  indefinido ;

			if  (  fireGlobals  )  {
				globalEventContext . trigger (  isSuccess ? "ajaxSuccess" : "ajaxError" ,
					[  jqXHR ,  s ,  isSuccess ? sucesso : erro  ]  ) ;
			}

			// Completo
			completeDeferred . fireWith (  callbackContext ,  [  jqXHR ,  statusText  ]  ) ;

			if  (  fireGlobals  )  {
				globalEventContext . trigger (  "ajaxComplete" ,  [  jqXHR ,  s  ]  ) ;

				// Lidar com o contador AJAX global
				if  (  ! (  - jQuery . ativo  )  )  {
					jQuery . evento . trigger (  "ajaxStop"  ) ;
				}
			}
		}

		return  jqXHR ;
	} ,

	getJSON : function (  url ,  data ,  callback  )  {
		return  jQuery . get (  url ,  dados ,  retorno de chamada ,  "json"  ) ;
	} ,

	getScript : function (  url ,  callback  )  {
		return  jQuery . get (  url ,  undefined ,  callback ,  "script"  ) ;
	}
}  ) ;

jQuery . each (  [  "get" ,  "post"  ] ,  função (  i ,  método  )  {
	jQuery [  método  ]  =  função (  url ,  dados ,  retorno de chamada ,  tipo  )  {

		// Muda os argumentos se o argumento de dados foi omitido
		if  (  jQuery . isFunction (  data  )  )  {
			tipo  =  tipo  ||  retorno de chamada ;
			retorno de chamada  =  dados ;
			dados  =  indefinido ;
		}

		// O url pode ser um objeto de opções (que deve ter .url)
		return  jQuery . ajax (  jQuery . extend (  {
			url : url ,
			tipo : método ,
			dataType : type ,
			dados : dados ,
			sucesso : callback
		} ,  jQuery . isPlainObject (  url  )  &&  url  )  ) ;
	} ;
}  ) ;


jQuery . _evalUrl  =  function (  url  )  {
	return  jQuery . ajax (  {
		url : url ,

		// Torne isso explícito, pois o usuário pode sobrescrever por meio de ajaxSetup (# 11264)
		digite : "GET" ,
		dataType : "script" ,
		cache : verdadeiro ,
		async : false ,
		global : falso ,
		"throws" : true
	}  ) ;
} ;


jQuery . fn . extend (  {
	wrapAll : function (  html  )  {
		var  wrap ;

		if  (  este [  0  ]  )  {
			if  (  jQuery . isFunction (  html  )  )  {
				html  =  html . ligue (  este [  0  ]  ) ;
			}

			// Os elementos para envolver o alvo
			wrap  =  jQuery (  html ,  this [  0  ] . ownerDocument  ) . eq (  0  ) . clone (  verdadeiro  ) ;

			if  (  this [  0  ] . parentNode  )  {
				embrulhar . insertBefore (  this [  0  ]  ) ;
			}

			embrulhar . map (  function ( )  {
				var  elem  =  this ;

				while  (  elem . firstElementChild  )  {
					elem  =  elem . firstElementChild ;
				}

				return  elem ;
			}  ) . anexar (  isto  ) ;
		}

		devolva  isso ;
	} ,

	wrapInner : function (  html  )  {
		if  (  jQuery . isFunction (  html  )  )  {
			devolva  isso . cada (  função (  i  )  {
				jQuery (  isso  ) . wrapInner (  html . call (  this ,  i  )  ) ;
			}  ) ;
		}

		devolva  isso . cada (  função ( )  {
			var  self  =  jQuery (  this  ) ,
				conteúdo  =  self . conteúdo ( ) ;

			if  (  conteúdo . comprimento  )  {
				conteúdo . wrapAll (  html  ) ;

			}  else  {
				eu . anexar (  html  ) ;
			}
		}  ) ;
	} ,

	wrap : function (  html  )  {
		var  isFunction  =  jQuery . isFunction (  html  ) ;

		devolva  isso . cada (  função (  i  )  {
			jQuery (  isso  ) . wrapAll (  isFunction ? html . call (  this ,  i  ) : html  ) ;
		}  ) ;
	} ,

	desembrulhar : função (  seletor  )  {
		isso . pai (  seletor  ) . não (  "corpo"  ) . cada (  função ( )  {
			jQuery (  isso  ) . substituirWith (  this . childNodes  ) ;
		}  ) ;
		devolva  isso ;
	}
}  ) ;


jQuery . expr . pseudos . oculto  =  função (  elem  )  {
	volte  ! jQuery . expr . pseudos . visível (  elem  ) ;
} ;
jQuery . expr . pseudos . visível  =  função (  elem  )  {
	volte  ! ! (  elem . offsetWidth  ||  elem . offsetHeight  ||  elem . getClientRects ( ) . length  ) ;
} ;




jQuery . ajaxSettings . xhr  =  function ( )  {
	tente  {
		retornar  nova  janela . XMLHttpRequest ( ) ;
	}  catch  (  e  )  { }
} ;

var  xhrSuccessStatus  =  {

		// O protocolo de arquivo sempre produz o código de status 0, suponha 200
		0 : 200 ,

		// Suporte: IE <= 9 apenas
		// # 1450: às vezes o IE retorna 1223 quando deveria ser 204
		1223 : 204
	} ,
	xhrSupported  =  jQuery . ajaxSettings . xhr ( ) ;

suporte . cors  =  ! ! xhrSupported  &&  (  "withCredentials"  em  xhrSupported  ) ;
suporte . ajax  =  xhrSupported  =  ! ! xhrSupported ;

jQuery . ajaxTransport (  função (  opções  )  {
	var  callback ,  errorCallback ;

	// Domínio cruzado permitido apenas se compatível com XMLHttpRequest
	se  (  de apoio . CORS  ||  xhrSupported  &&  ! opções . crossdomain  )  {
		return  {
			enviar : função (  cabeçalhos ,  completo  )  {
				var  i ,
					xhr  =  opções . xhr ( ) ;

				xhr . aberto (
					opções . tipo ,
					opções . url ,
					opções . assíncrono ,
					opções . nome de usuário ,
					opções . senha
				) ;

				// Aplicar campos personalizados se fornecidos
				if  (  opções . xhrFields  )  {
					para  (  i  em  opções . xhrFields  )  {
						xhr [  i  ]  =  opções . xhrFields [  i  ] ;
					}
				}

				// Substitua o tipo MIME, se necessário
				if  (  options . mimeType  &&  xhr . overrideMimeType  )  {
					xhr . overrideMimeType (  opções . mimeType  ) ;
				}

				// cabeçalho X-Requested-With
				// Para solicitações de domínio cruzado, visto que as condições para um preflight são
				// semelhante a um quebra-cabeça, nós simplesmente nunca o configuramos para ter certeza.
				// (sempre pode ser definido por solicitação ou até mesmo usando ajaxSetup)
				// Para solicitações do mesmo domínio, não mudará o cabeçalho se já tiver sido fornecido.
				if  (  ! options . crossDomain  &&  ! headers [  "X-Requested-With"  ]  )  {
					headers [  "X-Requested-With"  ]  =  "XMLHttpRequest" ;
				}

				// Definir cabeçalhos
				para  (  i  nos  cabeçalhos  )  {
					xhr . setRequestHeader (  i ,  cabeçalhos [  i  ]  ) ;
				}

				// Ligue de volta
				retorno de chamada  =  função (  tipo  )  {
					return  function ( )  {
						if  (  callback  )  {
							callback  =  errorCallback  =  xhr . onload  =
								xhr . onerror  =  xhr . onabort  =  xhr . onreadystatechange  =  null ;

							if  (  digite  ===  "abortar"  )  {
								xhr . abortar ( ) ;
							}  else  if  (  digite  ===  "erro"  )  {

								// Suporte: IE <= 9 apenas
								// Em um aborto nativo manual, o IE9 lança
								// erros em qualquer acesso de propriedade que não seja readyState
								if  (  typeof  xhr . status  ! ==  "número"  )  {
									completo (  0 ,  "erro"  ) ;
								}  else  {
									completo (

										// Arquivo: o protocolo sempre produz status 0; consulte # 8605, # 14207
										xhr . status ,
										xhr . statusText
									) ;
								}
							}  else  {
								completo (
									xhrSuccessStatus [  xhr . status  ]  ||  xhr . status ,
									xhr . statusText ,

									// Suporte: IE <= 9 apenas
									// IE9 não tem XHR2, mas joga no binário (trac-11426)
									// Para não texto XHR2, deixe o chamador lidar com isso (gh-2498)
									(  xhr . responseType  ||  "text"  )  ! ==  "text"   ||
									typeof  xhr . responseText  ! ==  "string" ?
										{  binário : xhr . resposta  } :
										{  texto : xhr . responseText  } ,
									xhr . getAllResponseHeaders ( )
								) ;
							}
						}
					} ;
				} ;

				// Ouça os eventos
				xhr . onload  =  retorno de chamada ( ) ;
				errorCallback  =  xhr . onerror  =  retorno de chamada (  "erro"  ) ;

				// Suporte: apenas IE 9
				// Use onreadystatechange para substituir onabort
				// para lidar com abortos não capturados
				if  (  xhr . onabort  ! ==  undefined  )  {
					xhr . onabort  =  errorCallback ;
				}  else  {
					xhr . onreadystatechange  =  function ( )  {

						// Verifique o readyState antes do tempo limite, pois ele muda
						if  (  xhr . readyState  ===  4  )  {

							// Permitir que onerror seja chamado primeiro,
							// mas isso não vai lidar com um aborto nativo
							// Além disso, salve errorCallback em uma variável
							// como xhr.onerror não pode ser acessado
							janela . setTimeout (  function ( )  {
								if  (  callback  )  {
									errorCallback ( ) ;
								}
							}  ) ;
						}
					} ;
				}

				// Crie o retorno de chamada para abortar
				callback  =  callback (  "abortar"  ) ;

				tente  {

					// Envie a solicitação (isso pode gerar uma exceção)
					xhr . enviar (  opções . hasContent  &&  options . data  ||  null  ) ;
				}  catch  (  e  )  {

					// # 14683: Apenas relançar se isso ainda não tiver sido notificado como um erro
					if  (  callback  )  {
						jogue  e ;
					}
				}
			} ,

			abort : function ( )  {
				if  (  callback  )  {
					callback ( ) ;
				}
			}
		} ;
	}
}  ) ;




// Impede a execução automática de scripts quando nenhum dataType explícito foi fornecido (consulte gh-2432)
jQuery . ajaxPrefilter (  função (  ões  )  {
	if  (  s . crossDomain  )  {
		s . conteúdo . script  =  false ;
	}
}  ) ;

// Instale o script dataType
jQuery . ajaxSetup (  {
	aceita : {
		script : "text / javascript, application / javascript,"  +
			"application / ecmascript, application / x-ecmascript"
	} ,
	conteúdo : {
		script : / \ b (?: java | ecma ) script \ b /
	} ,
	conversores : {
		"script de texto" : função (  texto  )  {
			jQuery . globalEval (  texto  ) ;
			 texto de retorno ;
		}
	}
}  ) ;

// Lidar com o caso especial do cache e crossDomain
jQuery . ajaxPrefilter (  "script" ,  função (  ões  )  {
	if  (  s . cache  ===  indefinido  )  {
		s . cache  =  false ;
	}
	if  (  s . crossDomain  )  {
		s . tipo  =  "GET" ;
	}
}  ) ;

// Bind script tag hack transport
jQuery . ajaxTransport (  "script" ,  função (  ões  )  {

	// Este transporte lida apenas com solicitações de vários domínios
	if  (  s . crossDomain  )  {
		var  script ,  retorno de chamada ;
		return  {
			enviar : função (  _ ,  completo  )  {
				script  =  jQuery (  "<script>"  ) . prop (  {
					charset : s . scriptCharset ,
					src : s . url
				}  ) . em (
					"erro de carregamento" ,
					callback  =  function (  evt  )  {
						script . remove ( ) ;
						retorno de chamada  =  nulo ;
						if  (  evt  )  {
							completo (  evt . type  ===  "erro" ? 404 : 200 ,  evt . type  ) ;
						}
					}
				) ;

				// Use a manipulação de DOM nativa para evitar nosso truque domManip AJAX
				documento . cabeça . appendChild (  script [  0  ]  ) ;
			} ,
			abort : function ( )  {
				if  (  callback  )  {
					callback ( ) ;
				}
			}
		} ;
	}
}  ) ;




var  oldCallbacks  =  [ ] ,
	rjsonp  =  / ( = ) \? (? = & | $ ) | \? \? / ;

// Configurações jsonp padrão
jQuery . ajaxSetup (  {
	jsonp : "callback" ,
	jsonpCallback : function ( )  {
		var  callback  =  oldCallbacks . pop ( )  ||  (  jQuery . expando  +  "_"  +  (  nonce ++  )  ) ;
		este [  retorno de chamada  ]  =  verdadeiro ;
		retorno de  chamada ;
	}
}  ) ;

// Detectar, normalizar opções e instalar retornos de chamada para solicitações jsonp
jQuery . ajaxPrefilter (  "json JSONP" ,  função (  s ,  originalSettings ,  jqXHR  )  {

	var  callbackName ,  substituído ,  responseContainer ,
		jsonProp  =  s . jsonp  ! ==  false  &&  (  rjsonp . test (  s . url  ) ?
			"url" :
			typeof  s . dados  ===  "string"  &&
				(  s . contentType  ||  ""  )
					. indexOf (  "application / x-www-form-urlencoded"  )  ===  0  &&
				rjsonp . teste (  s . dados  )  &&  "dados"
		) ;

	// Manipular se o tipo de dados esperado for "jsonp" ou se tivermos um parâmetro para definir
	if  (  jsonProp  ||  s . dataTypes [  0  ]  ===  "jsonp"  )  {

		// Obter o nome do retorno de chamada, lembrando o valor preexistente associado a ele
		callbackName  =  s . jsonpCallback  =  jQuery . isFunction (  s . jsonpCallback  ) ?
			s . jsonpCallback ( ) :
			s . jsonpCallback ;

		// Insira o retorno de chamada no url ou dados do formulário
		if  (  jsonProp  )  {
			s [  jsonProp  ]  =  s [  jsonProp  ] . substituir (  rjsonp ,  "$ 1"  +  callbackName  ) ;
		}  else  if  (  s . jsonp  ! ==  false  )  {
			s . url  + =  (  rquery . test (  s . url  ) ? "&" : "?"  )  +  s . jsonp  +  "="  +  callbackName ;
		}

		// Use o conversor de dados para recuperar json após a execução do script
		s . conversores [  "script json"  ]  =  function ( )  {
			if  (  ! responseContainer  )  {
				jQuery . erro (  callbackName  +  "não foi chamado"  ) ;
			}
			return  responseContainer [  0  ] ;
		} ;

		// Força json dataType
		s . dataTypes [  0  ]  =  "json" ;

		// Instalar callback
		sobrescrito  =  janela [  callbackName  ] ;
		janela [  callbackName  ]  =  function ( )  {
			responseContainer  =  argumentos ;
		} ;

		// Função de limpeza (dispara após os conversores)
		jqXHR . sempre (  função ( )  {

			// Se o valor anterior não existia - remova-o
			if  (  sobrescrito  ===  indefinido  )  {
				jQuery (  janela  ) . removeProp (  callbackName  ) ;

			// Caso contrário, restaure o valor preexistente
			}  else  {
				janela [  callbackName  ]  =  sobrescrito ;
			}

			// Salve de volta como grátis
			if  (  s [  callbackName  ]  )  {

				// Certifique-se de que reutilizar as opções não estrague as coisas
				s . jsonpCallback  =  configurações originais . jsonpCallback ;

				// Salve o nome do retorno de chamada para uso futuro
				oldCallbacks . push (  callbackName  ) ;
			}

			// Chame se for uma função e tivermos uma resposta
			if  (  responseContainer  &&  jQuery . isFunction (  sobrescrito  )  )  {
				sobrescrito (  responseContainer [  0  ]  ) ;
			}

			responseContainer  =  sobrescrito  =  indefinido ;
		}  ) ;

		// Delegar ao script
		retornar  "script" ;
	}
}  ) ;




// Suporte: Safari 8 apenas
// No Safari 8, documentos criados via document.implementation.createHTMLDocument
// reduz as formas de irmãos: o segundo se torna filho do primeiro.
// Por isso, esta medida de segurança deve ser desativada no Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
suporte . createHTMLDocument  =  (  function ( )  {
	var  body  =  document . implementação . createHTMLDocument (  ""  ) . corpo ;
	corpo . innerHTML  =  "<form> </form> <form> </form>" ;
	 corpo de retorno . childNodes . comprimento  ===  2 ;
}  ) ( ) ;


// O argumento "dados" deve ser uma string de html
// contexto (opcional): se especificado, o fragmento será criado neste contexto,
// padroniza para document
// keepScripts (opcional): se verdadeiro, incluirá scripts passados ​​na string html
jQuery . parseHTML  =  function (  data ,  context ,  keepScripts  )  {
	if  (  typeof  data  ! ==  "string"  )  {
		return  [ ] ;
	}
	if  (  typeof  context  ===  "boolean"  )  {
		keepScripts  =  context ;
		contexto  =  falso ;
	}

	var  base ,  analisada ,  scripts ;

	if  (  ! contexto  )  {

		// Impede que scripts ou manipuladores de eventos embutidos sejam executados imediatamente
		// usando document.implementation
		if  (  suporte . createHTMLDocument  )  {
			contexto  =  documento . implementação . createHTMLDocument (  ""  ) ;

			// Defina o href de base para o documento criado
			// portanto, quaisquer elementos analisados ​​com URLs
			// são baseados no URL do documento (gh-2965)
			base  =  contexto . createElement (  "base"  ) ;
			base . href  =  documento . localização . href ;
			contexto . cabeça . appendChild (  base  ) ;
		}  else  {
			contexto  =  documento ;
		}
	}

	analisado  =  rsingleTag . exec (  dados  ) ;
	scripts  =  ! keepScripts  &&  [ ] ;

	// Tag única
	if  (  analisado  )  {
		return  [  contexto . createElement (  analisado [  1  ]  )  ] ;
	}

	analisado  =  buildFragment (  [  dados  ] ,  contexto ,  scripts  ) ;

	if  (  scripts  &&  scripts . comprimento  )  {
		jQuery (  scripts  ) . remove ( ) ;
	}

	return  jQuery . merge (  [ ] ,  analisado . childNodes  ) ;
} ;


/ **
 * Carregar um url em uma página
 * /
jQuery . fn . load  =  function (  url ,  params ,  callback  )  {
	var  seletor ,  tipo ,  resposta ,
		self  =  this ,
		off  =  url . indexOf (  ""  ) ;

	if  (  off  >  - 1  )  {
		seletor  =  stripAndCollapse (  url . slice (  off  )  ) ;
		url  =  url . fatia (  0 ,  desligado  ) ;
	}

	// Se for uma função
	if  (  jQuery . isFunction (  params  )  )  {

		// Assumimos que é o retorno de chamada
		retorno de chamada  =  params ;
		params  =  indefinido ;

	// Caso contrário, crie uma string de parâmetro
	}  else  if  (  params  &&  typeof  params  ===  "objeto"  )  {
		type  =  "POST" ;
	}

	// Se tivermos elementos para modificar, faça a solicitação
	se  (  auto . comprimento  >  0  )  {
		jQuery . ajax (  {
			url : url ,

			// Se a variável "type" for indefinida, então o método "GET" será usado.
			// Torne o valor deste campo explícito desde
			// o usuário pode substituí-lo por meio do método ajaxSetup
			tipo : tipo  ||  "GET" ,
			dataType : "html" ,
			dados : params
		}  ) . feito (  função (  responseText  )  {

			// Salve a resposta para usar no retorno de chamada completo
			resposta  =  argumentos ;

			eu . html (  seletor ?

				// Se um seletor foi especificado, localize os elementos certos em um div fictício
				// Exclua scripts para evitar erros de 'Permissão negada' do IE
				jQuery (  "<div>"  ) . append (  jQuery . parseHTML (  responseText  )  ) . find (  seletor  ) :

				// Caso contrário, use o resultado completo
				responseText  ) ;

		// Se a solicitação for bem-sucedida, esta função obtém "dados", "status", "jqXHR"
		// mas eles são ignorados porque a resposta foi definida acima.
		// Se falhar, esta função obtém "jqXHR", "status", "erro"
		}  ) . sempre (  callback  &&  function (  jqXHR ,  status  )  {
			eu . cada (  função ( )  {
				retorno de chamada . aplicar (  this ,  response  ||  [  jqXHR . responseText ,  status ,  jqXHR  ]  ) ;
			}  ) ;
		}  ) ;
	}

	devolva  isso ;
} ;




// Anexe um monte de funções para lidar com eventos AJAX comuns
jQuery . cada (  [
	"ajaxStart" ,
	"ajaxStop" ,
	"ajaxComplete" ,
	"ajaxError" ,
	"ajaxSuccess" ,
	"ajaxSend"
] ,  função (  i ,  tipo  )  {
	jQuery . fn [  tipo  ]  =  função (  fn  )  {
		devolva  isso . em (  tipo ,  fn  ) ;
	} ;
}  ) ;




jQuery . expr . pseudos . animado  =  função (  elem  )  {
	return  jQuery . grep (  jQuery . timers ,  função (  fn  )  {
		return  elem  ===  fn . elem ;
	}  ) . comprimento ;
} ;




jQuery . deslocamento  =  {
	setOffset : function (  elem ,  options ,  i  )  {
		var  curPosition ,  curLeft ,  curCSSTop ,  curTop ,  curOffset ,  curCSSLeft ,  calculatePosition ,
			posição  =  jQuery . css (  elem ,  "posição"  ) ,
			curElem  =  jQuery (  elem  ) ,
			adereços  =  { } ;

		// Defina a posição primeiro, no caso de superior / esquerda serem definidos mesmo no elemento estático
		if  (  posição  ===  "estático"  )  {
			elem . estilo . posição  =  "relativo" ;
		}

		curOffset  =  curElem . offset ( ) ;
		curCSSTop  =  jQuery . css (  elem ,  "topo"  ) ;
		curCSSLeft  =  jQuery . css (  elem ,  "esquerda"  ) ;
		calcularPosição  =  (  posição  ===  "absoluto"  ||  posição  ===  "fixo"  )  &&
			(  curCSSTop  +  curCSSLeft  ) . indexOf (  "auto"  )  >  - 1 ;

		// Precisa ser capaz de calcular a posição se
		// superior ou esquerdo é automático e a posição é absoluta ou fixa
		if  (  calculPosition  )  {
			curPosition  =  curElem . posição ( ) ;
			curTop  =  curPosition . topo ;
			curLeft  =  curPosition . esquerda ;

		}  else  {
			curTop  =  parseFloat (  curCSSTop  )  ||  0 ;
			curLeft  =  parseFloat (  curCSSLeft  )  ||  0 ;
		}

		if  (  jQuery . isFunction (  options  )  )  {

			// Use jQuery.extend aqui para permitir a modificação do argumento de coordenadas (gh-1848)
			opções  =  opções . call (  elem ,  i ,  jQuery . extend (  { } ,  curOffset  )  ) ;
		}

		if  (  options . top  ! =  null  )  {
			adereços . top  =  (  opções . top  -  curOffset . top  )  +  curTop ;
		}
		if  (  options . left  ! =  null  )  {
			adereços . left  =  (  opções . left  -  curOffset . left  )  +  curLeft ;
		}

		if  (  "usando"  nas  opções  )  {
			opções . usando . chamada (  elem ,  adereços  ) ;

		}  else  {
			curElem . css (  adereços  ) ;
		}
	}
} ;

jQuery . fn . extend (  {
	deslocamento : função (  opções  )  {

		// Preserve o encadeamento para setter
		if  (  argumentos . comprimento  )  {
			 opções de  retorno ===  indefinido ?
				este :
				isso . cada (  função (  i  )  {
					jQuery . deslocamento . setOffset (  this ,  options ,  i  ) ;
				}  ) ;
		}

		var  doc ,  docElem ,  rect ,  win ,
			elem  =  este [  0  ] ;

		if  (  ! elem  )  {
			retorno ;
		}

		// Retorna zeros para elementos desconectados e ocultos (display: none) (gh-2310)
		// Suporte: IE <= 11 apenas
		// Executando getBoundingClientRect em um
		// nó desconectado no IE gera um erro
		if  (  ! elem . getClientRects ( ) . length  )  {
			return  {  top : 0 ,  left : 0  } ;
		}

		rect  =  elem . getBoundingClientRect ( ) ;

		doc  =  elem . ownerDocument ;
		docElem  =  doc . documentElement ;
		win  =  doc . defaultView ;

		return  {
			topo : rect . top  +  win . pageYOffset  -  docElem . clientTop ,
			esquerda : rect . esquerda  +  vitória . pageXOffset  -  docElem . clientLeft
		} ;
	} ,

	posição : função ( )  {
		if  (  ! este [  0  ]  )  {
			retorno ;
		}

		var  offsetParent ,  offset ,
			elem  =  este [  0  ] ,
			parentOffset  =  {  top : 0 ,  left : 0  } ;

		// Elementos fixos são deslocados da janela (parentOffset = {top: 0, left: 0},
		// porque é seu único pai deslocado
		if  (  jQuery . css (  elem ,  "posição"  )  ===  "fixo"  )  {

			// Suponha que getBoundingClientRect esteja lá quando a posição computada for fixa
			deslocamento  =  elem . getBoundingClientRect ( ) ;

		}  else  {

			// Get * real * offsetParent
			offsetParent  =  this . offsetParent ( ) ;

			// Obtenha os deslocamentos corretos
			deslocamento  =  isso . offset ( ) ;
			if  (  ! nodeName (  offsetParent [  0  ] ,  "html"  )  )  {
				parentOffset  =  offsetParent . offset ( ) ;
			}

			// Adicionar bordas offsetParent
			parentOffset  =  {
				topo : parentOffset . top  +  jQuery . css (  offsetParent [  0  ] ,  "borderTopWidth" ,  true  ) ,
				esquerda : parentOffset . esquerda  +  jQuery . css (  offsetParent [  0  ] ,  "borderLeftWidth" ,  true  )
			} ;
		}

		// Subtraia os deslocamentos pais e as margens do elemento
		return  {
			topo : deslocamento . top  -  parentOffset . topo  -  jQuery . css (  elem ,  "marginTop" ,  verdadeiro  ) ,
			esquerda : deslocamento . left  -  parentOffset . esquerda  -  jQuery . css (  elem ,  "marginLeft" ,  verdadeiro  )
		} ;
	} ,

	// Este método retornará documentElement nos seguintes casos:
	// 1) Para o elemento dentro do iframe sem offsetParent, este método retornará
	// documentElement da janela pai
	// 2) Para o elemento oculto ou destacado
	// 3) Para o elemento body ou html, ou seja, no caso do nó html - ele retornará a si mesmo
	//
	// mas essas exceções nunca foram apresentadas como casos de uso da vida real
	// e podem ser considerados como resultados mais preferíveis.
	//
	// Essa lógica, no entanto, não é garantida e pode mudar a qualquer momento no futuro
	offsetParent : function ( )  {
		devolva  isso . map (  function ( )  {
			var  offsetParent  =  this . offsetParent ;

			while  (  offsetParent  &&  jQuery . css (  offsetParent ,  "position"  )  ===  "static"  )  {
				offsetParent  =  offsetParent . offsetParent ;
			}

			return  offsetParent  ||  documentElement ;
		}  ) ;
	}
}  ) ;

// Criar métodos scrollLeft e scrollTop
jQuery . each (  {  scrollLeft : "pageXOffset" ,  scrollTop : "pageYOffset"  } ,  função (  método ,  prop  )  {
	var  top  =  "pageYOffset"  ===  prop ;

	jQuery . fn [  método  ]  =  função (  val  )  {
		 acesso de retorno (  this ,  function (  elem ,  method ,  val  )  {

			// Unir documentos e janelas
			var  win ;
			if  (  jQuery . isWindow (  elem  )  )  {
				win  =  elem ;
			}  else  if  (  elem . nodeType  ===  9  )  {
				win  =  elem . defaultView ;
			}

			if  (  val  ===  undefined  )  {
				retorno,  vitória ? win [  prop  ] : elem [  método  ] ;
			}

			if  (  win  )  {
				vencer . scrollTo (
					! top ? val : win . pageXOffset ,
					top ? val : win . pageYOffset
				) ;

			}  else  {
				elem [  método  ]  =  val ;
			}
		} ,  método ,  val ,  argumentos . comprimento  ) ;
	} ;
}  ) ;

// Suporte: Safari <= 7 - 9,1, Chrome <= 37 - 49
// Adicione os cssHooks superior / esquerdo usando jQuery.fn.position
// Bug do Webkit: https://bugs.webkit.org/show_bug.cgi?id=29084
// Bug Blink: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle retorna porcentagem quando especificado para superior / esquerda / inferior / direita;
// em vez de fazer o módulo css depender do módulo de deslocamento, basta verificar aqui
jQuery . each (  [  "top" ,  "left"  ] ,  function (  i ,  prop  )  {
	jQuery . cssHooks [  prop  ]  =  addGetHookIf (  suporte . pixelPosition ,
		função (  elem ,  calculado  )  {
			if  (  calculado  )  {
				calculado  =  curCSS (  elem ,  prop  ) ;

				// Se curCSS retornar porcentagem, retroceda para o deslocamento
				return  rnumnonpx . teste (  calculado  ) ?
					jQuery (  elem  ) . position ( ) [  prop  ]  +  "px" :
					calculado ;
			}
		}
	) ;
}  ) ;


// Criar os métodos innerHeight, innerWidth, height, width, outerHeight e outerWidth
jQuery . cada (  {  Altura : "altura" ,  Largura : "largura"  } ,  função (  nome ,  tipo  )  {
	jQuery . cada (  {  preenchimento : "interno"  +  nome ,  conteúdo : tipo ,  "" : "externo"  +  nome  } ,
		função (  defaultExtra ,  funcName  )  {

		// Margin é apenas para outerHeight, outerWidth
		jQuery . fn [  funcName  ]  =  função (  margem ,  valor  )  {
			var  encadeado  =  argumentos . comprimento  &&  (  defaultExtra  ||  typeof  margin  ! ==  "boolean"  ) ,
				extra  =  defaultExtra  ||  (  margem  ===  verdadeiro  ||  valor  ===  verdadeiro ? "margem" : "borda"  ) ;

			 acesso de retorno (  this ,  function (  elem ,  type ,  value  )  {
				var  doc ;

				if  (  jQuery . isWindow (  elem  )  )  {

					// $ (janela) .outerWidth / Height return w / h incluindo barras de rolagem (gh-1729)
					return  funcName . indexOf (  "outer"  )  ===  0 ?
						elem [  "interno"  +  nome  ] :
						elem . documento . documentElement [  "cliente"  +  nome  ] ;
				}

				// Obtenha a largura ou altura do documento
				if  (  elem . nodeType  ===  9  )  {
					doc  =  elem . documentElement ;

					// Role [Width / Height] ou desloque [Width / Height] ou cliente [Width / Height],
					// o que for maior
					return  Math . max (
						elem . body [  "scroll"  +  nome  ] ,  doc [  "scroll"  +  nome  ] ,
						elem . corpo [  "deslocamento"  +  nome  ] ,  doc [  "deslocamento"  +  nome  ] ,
						doc [  "cliente"  +  nome  ]
					) ;
				}

				 valor de  retorno ===  indefinido ?

					// Obtenha a largura ou altura do elemento, solicitando, mas não forçando parseFloat
					jQuery . css (  elem ,  tipo ,  extra  ) :

					// Defina a largura ou altura do elemento
					jQuery . estilo (  elem ,  tipo ,  valor ,  extra  ) ;
			} ,  tipo ,  encadeamento ? margem : indefinida ,  encadeada  ) ;
		} ;
	}  ) ;
}  ) ;


jQuery . fn . extend (  {

	vincular : função (  tipos ,  dados ,  fn  )  {
		devolva  isso . on (  tipos ,  nulos ,  dados ,  fn  ) ;
	} ,
	desvincular : função (  tipos ,  fn  )  {
		devolva  isso . off (  tipos ,  nulo ,  fn  ) ;
	} ,

	delegado : função (  seletor ,  tipos ,  dados ,  fn  )  {
		devolva  isso . em (  tipos ,  seletor ,  dados ,  fn  ) ;
	} ,
	undelegate : function (  selector ,  types ,  fn  )  {

		// (namespace) ou (seletor, tipos [, fn])
		retornar  argumentos . comprimento  ===  1 ?
			isso . desligado (  seletor ,  "**"  ) :
			isso . off (  tipos ,  seletor  ||  "**" ,  fn  ) ;
	}
}  ) ;

jQuery . holdReady  =  function (  hold  )  {
	if  (  mantenha  )  {
		jQuery . readyWait ++ ;
	}  else  {
		jQuery . pronto (  verdadeiro  ) ;
	}
} ;
jQuery . isArray  =  Array . isArray ;
jQuery . parseJSON  =  JSON . analisar ;
jQuery . nodeName  =  nodeName ;




// Registre-se como um módulo denominado AMD, uma vez que jQuery pode ser concatenado com outros
// arquivos que podem usar define, mas não por meio de um script de concatenação adequado que
// compreende módulos AMD anônimos. Um AMD nomeado é o mais seguro e robusto
// forma de se registrar. Jquery em minúsculas é usado porque os nomes dos módulos AMD são
// derivado de nomes de arquivo, e jQuery é normalmente entregue em letras minúsculas
// nome do arquivo. Faça isso depois de criar o global para que, se um módulo AMD quiser
// para chamar noConflict para ocultar esta versão do jQuery, funcionará.

// Observe que para portabilidade máxima, bibliotecas que não são jQuery devem
// declaram-se como módulos anônimos e evitam definir um global se um
// O carregador AMD está presente. jQuery é um caso especial. Para mais informações, veja
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if  (  typeof  define  ===  "function"  &&  define . amd  )  {
	define (  "jquery" ,  [ ] ,  function ( )  {
		return  jQuery ;
	}  ) ;
}




var

	// Mapear sobre jQuery em caso de sobrescrever
	_jQuery  =  janela . jQuery ,

	// Mapeie sobre $ em caso de sobrescrever
	_ $  =  janela . $ ;

jQuery . noConflict  =  function (  deep  )  {
	if  (  janela . $  ===  jQuery  )  {
		janela . $  =  _ $ ;
	}

	if  (  janela profunda  &&  . jQuery === jQuery ) {
		janela . jQuery  =  _jQuery ;
	}

	return  jQuery ;
} ;

// Expor jQuery e $ identifiers, mesmo em AMD
// (# 7102 # comentário: 10, https://github.com/jquery/jquery/pull/557)
// e CommonJS para emuladores de navegador (# 13566)
if  (  ! noGlobal  )  {
	janela . jQuery  =  janela . $  =  jQuery ;
}




return  jQuery ;
}  ) ;
