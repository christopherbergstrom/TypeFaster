package data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.transaction.annotation.Transactional;

@Transactional
public class TypeDAO
{
	@PersistenceContext
	private EntityManager em;
	
	public Words getWord()
	{
		int number = (1+(int)(Math.random()*187));
		return em.createQuery("SELECT w FROM Words w WHERE w.id like :number", Words.class).setParameter("number", number).getSingleResult();
	}
	
	public List<Scores> getScores()
	{
//		int number = (1+(int)(Math.random()*28));
//		return em.createQuery("SELECT s FROM Scores s WHERE s.id like :number", Scores.class).setParameter("number", number).getResultList();
		return em.createQuery("SELECT s FROM Scores s ORDER BY s.score DESC", Scores.class).setMaxResults(10).getResultList();
	}
	
	public Boolean createScore(Scores score)
	{
		System.out.println(score);
		em.persist(score);
		if (!em.contains(score))
		{
			return false;
		}
		else
		{
			return true;
		}
	}
}
