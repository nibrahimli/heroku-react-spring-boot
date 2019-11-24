package hello;

import java.sql.Timestamp;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class Ticks {
    @Id
    public Timestamp tick;
}
