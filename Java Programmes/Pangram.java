package CloudVandana;
public class Pangram {
    public boolean isPanagram(String s){
        if(s.length()<26){
            return false;
        }
        for(int i='A';i<='Z';i++){
            if(s.indexOf(i)<0){
                return false;
            }
        }
        return true;
    }
    public static void main(String[] args){
        Pangram p=new Pangram();
        String s="abcd";
        s=s.toUpperCase();
        boolean result= p.isPanagram(s);
        if(!result){
            System.out.println("Given Sentence is not Panagram");
        }
        else{
            System.out.println("Given String is Panagram");
        }   
    }
}
