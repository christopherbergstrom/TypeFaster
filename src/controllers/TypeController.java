package controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import data.Scores;
import data.TypeDAO;
import data.Words;

@Controller
public class TypeController
{
	@Autowired
	private TypeDAO typeDao;
	
	@ResponseBody
	@RequestMapping("ping")
	public String ping()
	{
		return "pong";
	}
	
	@ResponseBody
	@RequestMapping(path="getWord")
	public Words getWord()
	{
		return typeDao.getWord();
	}
	
	@ResponseBody
	@RequestMapping(path="getScores")
	public List<Scores> getScore()
	{
		return typeDao.getScores();
	}
}
