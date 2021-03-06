// Dimensions of sunburst.
var width = 750;
var height = 600;
var radius = Math.min(width, height) / 2;

// Breadcrumb dimensions: width, height, spacing, width of tip/tail.
var b = {
  w: 195, h: 25, s: 3, t: 5
};

var legend_dict = {
 "Kingdom": "#5687d1",
 "Phylum": "#7b615c",
 "Class": "#de783b",
 "Order": "#6ab975",
 "Family": "#a173d1",
 "Genus":  "#2AA077",
 "Species": "#EF2513",
 "Sub-species": "#E6E918"
}

// Mapping of step names to colors.
var colors = {
"Bacteria": "#5687d1",  
  
"Acidobacteria":"#7b615c",
"Actinobacteria":"#7b615c",
"Bacteroidetes":"#7b615c",
"Cyanobacteria":"#7b615c",
"Deferribacteres":"#7b615c",
"Deinococcus-Thermus":"#7b615c",
"Fibrobacteres":"#7b615c",
"Firmicutes":"#7b615c",
"Fusobacteria":"#7b615c",
"Gemmatimonadetes":"#7b615c",
"Lentisphaerae":"#7b615c",
"OD1":"#7b615c",
"Planctomycetes":"#7b615c",
"Proteobacteria":"#7b615c",
"Tenericutes":"#7b615c",
"TM7":"#7b615c",
"Verrucomicrobia":"#7b615c",
    
"Acidobacteria":"#de783b",
"Actinobacteria":"#de783b",
"Alphaproteobacteria":"#de783b",
"Bacilli":"#de783b",
"Bacteroidetes":"#de783b",
"Betaproteobacteria":"#de783b",
"Clostridia":"#de783b",
"Cyanobacteria":"#de783b",
"Deferribacteres":"#de783b",
"Deinococci":"#de783b",
"Deltaproteobacteria":"#de783b",
"Epsilonproteobacteria":"#de783b",
"Erysipelotrichi":"#de783b",
"Fibrobacteres":"#de783b",
"Flavobacteria":"#de783b",
"Fusobacteria":"#de783b",
"Gammaproteobacteria":"#de783b",
"Gemmatimonadetes":"#de783b",
"Lentisphaerae":"#de783b",
"Mollicutes":"#de783b",
"OD1_genera_incertae_sedis":"#de783b",
"Planctomycetacia":"#de783b",
"Sphingobacteria":"#de783b",
"TM7_genera_incertae_sedis":"#de783b",
"Verrucomicrobiae":"#de783b",
  
"Acidobacteriales":"#6ab975",
"Actinobacteridae":"#6ab975",
"Aeromonadales":"#6ab975",
"Alteromonadales":"#6ab975",
"Bacillales":"#6ab975",
"Bacteroidales":"#6ab975",
"Bdellovibrionales":"#6ab975",
"Burkholderiales":"#6ab975",
"Campylobacterales":"#6ab975",
"Caulobacterales":"#6ab975",
"Chloroplast":"#6ab975",
"Clostridiales":"#6ab975",
"Coriobacteridae":"#6ab975",
"Deferribacterales":"#6ab975",
"Deinococcales":"#6ab975",
"Desulfovibrionales":"#6ab975",
"Enterobacteriales":"#6ab975",
"Erysipelotrichales":"#6ab975",
"Family I":"#6ab975",
"Fibrobacterales":"#6ab975",
"Flavobacteriales":"#6ab975",
"Fusobacteriales":"#6ab975",
"Gemmatimonadales":"#6ab975",
"Hydrogenophilales":"#6ab975",
"Lactobacillales":"#6ab975",
"Legionellales":"#6ab975",
"Mycoplasmatales":"#6ab975",
"Myxococcales":"#6ab975",
"Neisseriales":"#6ab975",
"Oceanospirillales":"#6ab975",
"Pasteurellales":"#6ab975",
"Planctomycetales":"#6ab975",
"Pseudomonadales":"#6ab975",
"Rhizobiales":"#6ab975",
"Rhodobacterales":"#6ab975",
"Rhodocyclales":"#6ab975",
"Rhodospirillales":"#6ab975",
"Rickettsiales":"#6ab975",
"Rubrobacteridae":"#6ab975",
"Sphingobacteriales":"#6ab975",
"Sphingomonadales":"#6ab975",
"Verrucomicrobiales":"#6ab975",
"Victivallales":"#6ab975",
"Xanthomonadales":"#6ab975",

  
"Acetobacteraceae":"#a173d1",
"Acidobacteriaceae":"#a173d1",
"Actinomycetales":"#a173d1",
"Aeromonadaceae":"#a173d1",
"Alcaligenaceae":"#a173d1",
"Bacillaceae":"#a173d1",
"Bacillariophyta":"#a173d1",
"Bacteriovoracaceae":"#a173d1",
"Bacteroidaceae":"#a173d1",
"Beijerinckiaceae":"#a173d1",
"Bifidobacteriales":"#a173d1",
"Bradyrhizobiaceae":"#a173d1",
"Burkholderiaceae":"#a173d1",
"Campylobacteraceae":"#a173d1",
"Carnobacteriaceae":"#a173d1",
"Caulobacteraceae":"#a173d1",
"Clostridiaceae":"#a173d1",
"Comamonadaceae":"#a173d1",
"Coriobacteriales":"#a173d1",
"Crenotrichaceae":"#a173d1",
"Cryomorphaceae":"#a173d1",
"Deferribacteraceae":"#a173d1",
"Deinococcaceae":"#a173d1",
"Desulfovibrionaceae":"#a173d1",
"Enterobacteriaceae":"#a173d1",
"Enterococcaceae":"#a173d1",
"Erysipelotrichaceae":"#a173d1",
"Eubacteriaceae":"#a173d1",
"Fibrobacteraceae":"#a173d1",
"Flavobacteriaceae":"#a173d1",
"Flexibacteraceae":"#a173d1",
"Fusobacteriaceae":"#a173d1",
"Gemmatimonadaceae":"#a173d1",
"GpI":"#a173d1",
"Halomonadaceae":"#a173d1",
"Helicobacteraceae":"#a173d1",
"Hydrogenophilaceae":"#a173d1",
"Hyphomicrobiaceae":"#a173d1",
"Incertae sedis 11":"#a173d1",
"Incertae sedis 3":"#a173d1",
"Incertae sedis 4":"#a173d1",
"Incertae sedis 5":"#a173d1",
"Incertae Sedis XI":"#a173d1",
"Incertae Sedis XIII":"#a173d1",
"Lachnospiraceae":"#a173d1",
"Lactobacillaceae":"#a173d1",
"Legionellaceae":"#a173d1",
"Leuconostocaceae":"#a173d1",
"Listeriaceae":"#a173d1",
"Methylobacteriaceae":"#a173d1",
"Methylocystaceae":"#a173d1",
"Moraxellaceae":"#a173d1",
"Mycoplasmataceae":"#a173d1",
"Neisseriaceae":"#a173d1",
"Oxalobacteraceae":"#a173d1",
"Paenibacillaceae":"#a173d1",
"Pasteurellaceae":"#a173d1",
"Peptostreptococcaceae":"#a173d1",
"Phyllobacteriaceae":"#a173d1",
"Planctomycetaceae":"#a173d1",
"Porphyromonadaceae":"#a173d1",
"Prevotellaceae":"#a173d1",
"Pseudoalteromonadaceae":"#a173d1",
"Pseudomonadaceae":"#a173d1",
"Rhodobacteraceae":"#a173d1",
"Rhodocyclaceae":"#a173d1",
"Rhodospirillaceae":"#a173d1",
"Rikenellaceae":"#a173d1",
"Rubrobacterales":"#a173d1",
"Ruminococcaceae":"#a173d1",
"Saprospiraceae":"#a173d1",
"Sorangineae":"#a173d1",
"Sphingobacteriaceae":"#a173d1",
"Sphingomonadaceae":"#a173d1",
"Staphylococcaceae":"#a173d1",
"Streptococcaceae":"#a173d1",
"Streptophyta":"#a173d1",
"Succinivibrionaceae":"#a173d1",
"Veillonellaceae":"#a173d1",
"Verrucomicrobiaceae":"#a173d1",
"Victivallaceae":"#a173d1",
"Xanthomonadaceae":"#a173d1",
  
"Achromobacter":"#2AA077",
"Acidovorax":"#2AA077",
"Acinetobacter":"#2AA077",
"Actinomycineae":"#2AA077",
"Aeromonas":"#2AA077",
"Akkermansia":"#2AA077",
"Alistipes":"#2AA077",
"Allobaculum":"#2AA077",
"Anaerobiospirillum":"#2AA077",
"Anaerococcus":"#2AA077",
"Anaerofilum":"#2AA077",
"Anaerofustis":"#2AA077",
"Anaerostipes":"#2AA077",
"Anaerotruncus":"#2AA077",
"Anaerovorax":"#2AA077",
"Aquabacterium":"#2AA077",
"Arcicella":"#2AA077",
"Arcobacter":"#2AA077",
"Bacillaceae 1":"#2AA077",
"Bacteriovorax":"#2AA077",
"Bacteroides":"#2AA077",
"Belnapia":"#2AA077",
"Bifidobacteriaceae":"#2AA077",
"Bilophila":"#2AA077",
"Bosea":"#2AA077",
"Bradyrhizobium":"#2AA077",
"Branhamella":"#2AA077",
"Brevundimonas":"#2AA077",
"Brochothrix":"#2AA077",
"Bryantella":"#2AA077",
"Bulleidia":"#2AA077",
"Burkholderia":"#2AA077",
"Butyrivibrio":"#2AA077",
"Campylobacter":"#2AA077",
"Carnobacteriaceae 1":"#2AA077",
"Catenibacterium":"#2AA077",
"Caulobacter":"#2AA077",
"Cetobacterium":"#2AA077",
"Chromohalobacter":"#2AA077",
"Cloacibacterium":"#2AA077",
"Clostridiaceae 1":"#2AA077",
"Comamonas":"#2AA077",
"Conchiformibius":"#2AA077",
"Coprobacillus":"#2AA077",
"Coprococcus":"#2AA077",
"Coriobacterineae":"#2AA077",
"Corynebacterineae":"#2AA077",
"Cupriavidus":"#2AA077",
"Curvibacter":"#2AA077",
"Cytophaga":"#2AA077",
"Dechloromonas":"#2AA077",
"Deinococcus":"#2AA077",
"Delftia":"#2AA077",
"Desulfovibrio":"#2AA077",
"Dialister":"#2AA077",
"Dorea":"#2AA077",
"Duganella":"#2AA077",
"Dyadobacter":"#2AA077",
"Empedobacter":"#2AA077",
"Enterobacter":"#2AA077",
"Enterococcus":"#2AA077",
"Erysipelotrichaceae Incertae Sedis":"#2AA077",
"Eubacterium":"#2AA077",
"Faecalibacterium":"#2AA077",
"Fibrobacter":"#2AA077",
"Finegoldia":"#2AA077",
"Flavimonas":"#2AA077",
"Flavobacterium":"#2AA077",
"Fluviicola":"#2AA077",
"Frankineae":"#2AA077",
"Fusobacterium":"#2AA077",
"Gemella":"#2AA077",
"Gemmata":"#2AA077",
"Gemmatimonas":"#2AA077",
"Glycomycineae":"#2AA077",
"Gp16":"#2AA077",
"Gp4":"#2AA077",
"Gp5":"#2AA077",
"Gp6":"#2AA077",
"Halomonas":"#2AA077",
"Helicobacter":"#2AA077",
"Hespellia":"#2AA077",
"Hoeflea":"#2AA077",
"Holdemania":"#2AA077",
"Hydrogenophaga":"#2AA077",
"Hymenobacter":"#2AA077",
"Hyphomicrobium":"#2AA077",
"Janthinobacterium":"#2AA077",
"Jeotgalicoccus":"#2AA077",
"Lachnospira":"#2AA077",
"Lachnospiraceae Incertae Sedis":"#2AA077",
"Lactobacillus":"#2AA077",
"Lactococcus":"#2AA077",
"Legionella":"#2AA077",
"Leuconostoc":"#2AA077",
"Massilia":"#2AA077",
"Megamonas":"#2AA077",
"Megasphaera":"#2AA077",
"Mesorhizobium":"#2AA077",
"Methylobacterium":"#2AA077",
"Methylocystis":"#2AA077",
"Micrococcineae":"#2AA077",
"Mucispirillum":"#2AA077",
"Mycoplasma":"#2AA077",
"Naxibacter":"#2AA077",
"Novosphingobium":"#2AA077",
"Odyssella":"#2AA077",
"Oligella":"#2AA077",
"Paenibacillaceae 1":"#2AA077",
"Pandoraea":"#2AA077",
"Parabacteroides":"#2AA077",
"Paracoccus":"#2AA077",
"Parvimonas":"#2AA077",
"Pediococcus":"#2AA077",
"Pedobacter":"#2AA077",
"Peptoniphilus":"#2AA077",
"Peptostreptococcaceae Incertae Sedis":"#2AA077",
"Peptostreptococcus":"#2AA077",
"Petrobacter":"#2AA077",
"Phenylobacterium":"#2AA077",
"Polyangiaceae":"#2AA077",
"Polynucleobacter":"#2AA077",
"Porphyrobacter":"#2AA077",
"Porphyromonas":"#2AA077",
"Prevotella":"#2AA077",
"Propionibacterineae":"#2AA077",
"Pseudoalteromonas":"#2AA077",
"Pseudomonas":"#2AA077",
"Ralstonia":"#2AA077",
"Raoultella":"#2AA077",
"Rhodanobacter":"#2AA077",
"Roseburia":"#2AA077",
"Rubellimicrobium":"#2AA077",
"Rubrobacterineae":"#2AA077",
"Ruminococcaceae Incertae Sedis":"#2AA077",
"Ruminococcus":"#2AA077",
"Salinicoccus":"#2AA077",
"Shigella":"#2AA077",
"Sphingobacterium":"#2AA077",
"Sphingobium":"#2AA077",
"Sphingomonas":"#2AA077",
"Spirosoma":"#2AA077",
"Sporobacter":"#2AA077",
"Staphylococcus":"#2AA077",
"Stenotrophomonas":"#2AA077",
"Streptococcus":"#2AA077",
"Streptomycineae":"#2AA077",
"Streptosporangineae":"#2AA077",
"Subdoligranulum":"#2AA077",
"Sutterella":"#2AA077",
"Synergistes":"#2AA077",
"Syntrophococcus":"#2AA077",
"Tepidimonas":"#2AA077",
"Terrimonas":"#2AA077",
"Tistrella":"#2AA077",
"Turicibacter":"#2AA077",
"Variovorax":"#2AA077",
"Veillonella":"#2AA077",
"Victivallis":"#2AA077",
"Xanthobacter":"#2AA077",
  
"Actinomycetaceae":"#EF2513",
"Anoxybacillus":"#EF2513",
"Atopostipes":"#EF2513",
"Bacillus":"#EF2513",
"Beutenbergiaceae":"#EF2513",
"Bifidobacterium":"#EF2513",
"Brevibacillus":"#EF2513",
"Brevibacteriaceae":"#EF2513",
"Cellulomonadaceae":"#EF2513",
"Clostridium":"#EF2513",
"Coriobacteriaceae":"#EF2513",
"Corynebacteriaceae":"#EF2513",
"Dermabacteraceae":"#EF2513",
"Dolosigranulum":"#EF2513",
"Geobacillus":"#EF2513",
"Geodermatophilaceae":"#EF2513",
"Glycomycetaceae":"#EF2513",
"Intrasporangiaceae":"#EF2513",
"Kineosporiaceae":"#EF2513",
"Microbacteriaceae":"#EF2513",
"Micrococcaceae":"#EF2513",
"Mycobacteriaceae":"#EF2513",
"Nocardiaceae":"#EF2513",
"Nocardioidaceae":"#EF2513",
"Nocardiopsaceae":"#EF2513",
"Paenibacillus":"#EF2513",
"Patulibacteraceae":"#EF2513",
"Promicromonosporaceae":"#EF2513",
"Propionibacteriaceae":"#EF2513",
"Streptomycetaceae":"#EF2513",
"Thermobacillus":"#EF2513",
"Trichococcus":"#EF2513",
"Williamsiaceae":"#EF2513",

"Actinomyces":"#E6E918",
"Aeromicrobium":"#E6E918",
"Arthrobacter":"#E6E918",
"Atopobium":"#E6E918",
"Bacillus c":"#E6E918",
"Bacillus d":"#E6E918",
"Bacillus f":"#E6E918",
"Bacillus j":"#E6E918",
"Blastococcus":"#E6E918",
"Brachybacterium":"#E6E918",
"Brevibacterium":"#E6E918",
"Cellulomonas":"#E6E918",
"Collinsella":"#E6E918",
"Coriobacterium":"#E6E918",
"Corynebacterium":"#E6E918",
"Denitrobacterium":"#E6E918",
"Eggerthella":"#E6E918",
"Friedmanniella":"#E6E918",
"Frigoribacterium":"#E6E918",
"Geodermatophilus":"#E6E918",
"Georgenia":"#E6E918",
"Kineosporia":"#E6E918",
"Kocuria":"#E6E918",
"Leifsonia":"#E6E918",
"Microbacterium":"#E6E918",
"Micrococcus":"#E6E918",
"Mycobacterium":"#E6E918",
"Nocardioides":"#E6E918",
"Nocardiopsis":"#E6E918",
"Okibacterium":"#E6E918",
"Ornithinimicrobium":"#E6E918",
"Patulibacter":"#E6E918",
"Propionibacterium":"#E6E918",
"Rathayibacter":"#E6E918",
"Rhodococcus":"#E6E918",
"Rothia":"#E6E918",
"Slackia":"#E6E918",
"Stackebrandtia":"#E6E918",
"Streptomyces":"#E6E918",
"Tetrasphaera":"#E6E918",
"Williamsia":"#E6E918"
 
};

// Total size of all segments; we set this later, after loading the data.
var totalSize = 0; 

var path = null;