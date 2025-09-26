import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen, Volume2, Play, Pause, SkipBack, SkipForward, Download, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ReaderProps {
  reader: {
    id: number;
    title: string;
    subtitle: string;
    level: string;
    words: number;
    readTime: string;
    rating: number;
    reads: number;
    description: string;
    topics: string[];
    hasAudio: boolean;
    difficulty: string;
    color: string;
  };
  children: React.ReactNode;
}

const ReaderViewer = ({ reader, children }: ReaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { toast } = useToast();

  // Sample story content - in a real app this would come from your database
  const getStoryContent = (id: number) => {
    const stories = {
      1: `# Harusi ya Pemba
*A Wedding in Pemba*

**Sehemu ya Kwanza: Maandalizi**

Amina alikuwa msichana mdogo wa miaka kumi na saba. Alikuwa akiishi Pemba, kisiwa cha kupendeza kaskazini ya Tanzania. Leo alikuwa siku maalumu sana - dada yake mkubwa Fatuma alikuwa na harusi!

"Amina! Amina!" Mama alimwita. "Njoo hapa umsaidie dada yako!"

Amina alikimbia haraka haraka nyumbani. Alimkuta Fatuma akiwa amevaa nguo nzuri za kiafrika - kanzu nyeupe na hijabi ya dhahabu.

"Unaonekana mzuri sana, dada!" Amina alisema kwa furaha.

**Sehemu ya Pili: Sherehe**

Familia yote ilikuwa imekusanyika. Shangazi za Fatuma walikuwa wakimtengenezea hina - miwani ya dhahabu mikononi na miguuni. Bibi alikuwa akimwonyesha Fatuma utamaduni wa kiafrika.

"Harusi ni sherehe ya familia nzima," Bibi alisema. "Ni wakati wa kushangilia upendo na umoja."

Watu wengi walikuja - marafiki, jamaa, na majirani. Kila mtu alikuwa na furaha. Walikuwa wakiimba nyimbo za kiafrika na kupiga ngoma.

**Sehemu ya Tatu: Chakula**

Mama na shangazi walikuwa wamepika chakula kitamu sana:
- Pilau - mchere mzuri wa nyama na viungo
- Samaki wa mchuzi wa nazi
- Chapati za moto
- Halua ya karanga

"Amina, chukua sahani hii kwa wageni," Mama alisema.

Amina alikuwa mwenye furaha kutumikia wageni. Alikuwa akijifunza jinsi ya kuwa mwenyeji mzuri.

**Sehemu ya Nne: Utamaduni**

Usiku, wanawake walikaa pamoja. Bibi alianza kuwaelezea hadithi za zamani za Pemba.

"Kisiwa chetu kina historia ndefu," alisema. "Tumeishi hapa kwa karne nyingi. Harusi ni wakati wa kupitisha utamaduni wetu kwa kizazi kijacho."

Amina alikuwa akisikiliza kwa makini. Alikuwa akijifunza mengi kuhusu familia yake na utamaduni wa Kipemba.

**Mwisho: Ufuraha**

Harusi ilikuwa ya furaha sana. Fatuma na mchumba wake walikuwa wenye furaha. Familia nzima ilikuwa imekusanyika kushangilia.

"Harusi ya leo itakuwa ya kukumbukwa milele," Amina aliwaza.

Usiku, alilala akiwa na ndoto nzuri za siku ya harusi ya dada yake.

---

**Maneno Mapya (New Vocabulary):**
- harusi = wedding
- maandalizi = preparations  
- sherehe = celebration
- utamaduni = tradition/culture
- wageni = guests
- mwenyeji = host
- kizazi = generation
- kushangilia = to celebrate`,

      2: `# Safari ya Serengeti
*Journey to Serengeti*

**Sehemu ya Kwanza: Mwanzo wa Safari**

Juma ni mvulana wa miaka kumi na nane kutoka Arusha. Leo ni siku yake ya kwanza kuwatembelea Serengeti - hifadhi kubwa ya wanyamapori.

"Safari yetu itachukua siku tatu," Papa alisema. "Tutaona wanyamapori wengi wa Afrika."

Juma alikuwa na msisimko mkubwa. Tangu akiwa mdogo, amekuwa akisoma vitabu kuhusu wanyamapori wa Afrika. Sasa ataweza kuwaona kwa macho yake mwenyewe!

**Sehemu ya Pili: Kukutana na Wanyamapori**

Siku ya kwanza Serengeti, walikutana na kundi kubwa la nyumbu.

"Hawa ni nyumbu," dereva wao Mwalimu Joseph alisema. "Wanakula majani na wanaishi kwa makundi."

Baadaye, waliona tembo wakubwa wakioga mtoni.

"Tembo ni wanyamapori wazuri," Juma alisema. "Wana akili na wanajali watoto wao."

Papa alimwonyesha jinsi ya kupiga picha bila kuwaogopesha wanyamapori.

**Sehemu ya Tatu: Simba na Familia Yao**

Siku ya pili, walikutana na kitu ajabu - familia ya simba!

"Simba ni mfalme wa pori," Mwalimu Joseph alisema. "Lakini ni simba jike anayewindisha."

Juma aliona simba mdogo akicheza na mama yake. Alikuwa na furaha kuona jinsi wanyamapori wanavyoishi kama familia.

"Wanyamapori pia wana mapenzi na mahusiano kama binadamu," Papa alisema.

**Sehemu ya Nne: Uhamisho Mkuu**

Siku ya tatu, waliona maajabu makubwa - uhamisho wa nyumbu na paa!

Maelfu ya wanyamapori walikuwa wakisonga kuelekea Kenya. Walikuwa wakitafuta majani mapya na maji.

"Huu ni uhamisho wa kila mwaka," Mwalimu Joseph alieleza. "Wanyamapori wanajua wakati wa kusonga."

Juma hakuamini macho yake. Hakuna kitu alichokiona kama hicho kabla!

**Sehemu ya Tano: Mazingira**

Wakati wa safari, Juma alijifunza mengi kuhusu mazingira:

- Mimea hutoa oksijeni
- Wanyamapori husaidia kupanda miti
- Kila kiumbe kina jukumu muhimu katika mazingira

"Ni jukumu letu kulinda mazingira haya," Papa alisema.

**Mwisho: Kurudi Nyumbani**

Safari iliisha, lakini memoriza za Juma zitabaki milele.

"Nitarudi Serengeti," Juma aliahidi. "Na nitawaeleza rafiki zangu kuhusu maajabu haya."

Juma alianza kuandika diary ya safari yake, akiweka picha na maelezo ya kila kitu alichokiona.

---

**Maneno Mapya (New Vocabulary):**
- safari = journey/trip
- wanyamapori = wild animals
- hifadhi = park/reserve
- msisimko = excitement
- makundi = herds/groups
- uhamisho = migration
- mazingira = environment
- kiumbe = creature
- jukumu = responsibility
- memoriza = memories`
    };
    
    return stories[id as keyof typeof stories] || stories[1];
  };

  const handleDownload = () => {
    const content = getStoryContent(reader.id);
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${reader.title.replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    toast({
      title: "Story Downloaded!",
      description: `"${reader.title}" has been downloaded to your device.`,
    });
  };

  const handleAudioToggle = () => {
    setIsPlaying(!isPlaying);
    toast({
      title: isPlaying ? "Audio Paused" : "Audio Playing",
      description: isPlaying ? "Story narration paused" : "Starting story narration...",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            {reader.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex gap-6 h-[70vh]">
          {/* Story Content */}
          <div className="flex-1">
            <ScrollArea className="h-full pr-4">
              <div className="prose prose-sm max-w-none dark:prose-invert">
                {getStoryContent(reader.id).split('\n').map((line, index) => {
                  if (line.startsWith('# ')) {
                    return <h1 key={index} className="text-2xl font-bold text-primary mb-4">{line.slice(2)}</h1>;
                  } else if (line.startsWith('**') && line.endsWith('**')) {
                    return <h2 key={index} className="text-lg font-semibold text-foreground mt-6 mb-3">{line.slice(2, -2)}</h2>;
                  } else if (line.startsWith('*') && line.endsWith('*')) {
                    return <p key={index} className="text-muted-foreground italic mb-4">{line.slice(1, -1)}</p>;
                  } else if (line.startsWith('- ')) {
                    return <li key={index} className="text-foreground ml-4">{line.slice(2)}</li>;
                  } else if (line.trim() === '') {
                    return <br key={index} />;
                  } else if (line.startsWith('---')) {
                    return <hr key={index} className="my-6 border-border" />;
                  } else {
                    return <p key={index} className="text-foreground mb-4 leading-relaxed">{line}</p>;
                  }
                })}
              </div>
            </ScrollArea>
          </div>

          {/* Sidebar */}
          <div className="w-80 border-l border-border pl-6">
            <div className="space-y-6">
              {/* Reader Info */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{reader.level}</Badge>
                  <Badge variant="outline">{reader.difficulty}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{reader.subtitle}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{reader.words} words</span>
                  <span>{reader.readTime}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-accent text-accent" />
                    <span>{reader.rating}</span>
                  </div>
                </div>
              </div>

              {/* Audio Controls */}
              {reader.hasAudio && (
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Audio Narration</h4>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline" onClick={handleAudioToggle}>
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => {
                      toast({
                        title: "Skip Back",
                        description: "Rewinding audio 10 seconds...",
                      });
                    }}>
                      <SkipBack className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => {
                      toast({
                        title: "Skip Forward", 
                        description: "Fast forwarding audio 10 seconds...",
                      });
                    }}>
                      <SkipForward className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {isPlaying ? "Playing narration..." : "Click play to hear the story"}
                  </div>
                </div>
              )}

              {/* Topics */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">Topics</h4>
                <div className="flex flex-wrap gap-1">
                  {reader.topics.map((topic, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <Button onClick={handleDownload} className="w-full" variant="outline">
                  <Download className="w-4 h-4" />
                  Download Story
                </Button>
                <Button 
                  className="w-full" 
                  variant="default"
                  onClick={() => {
                    toast({
                      title: "Reading Progress",
                      description: "Story progress saved to your account!",
                    });
                  }}
                >
                  <BookOpen className="w-4 h-4" />
                  Mark as Read
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReaderViewer;